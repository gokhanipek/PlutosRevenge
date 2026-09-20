import { getSupabase, isSupabaseConfigured } from './supabaseClient';
import {
    START_GAME,
    RECORD_SPIN,
    RECORD_PLANET_DEFEATED,
    RECORD_ORBIT_DEFEATED,
    END_SESSION,
    ABANDON_SESSION,
    IN_PROGRESS,
    ABANDONED,
} from '../store/constants';
import { offerRemoteSession, setPlayerId } from '../store/actions';

const TABLE = 'game_sessions';

// Transitions worth a write. Everything else (selecting a planet, swapping a
// battle move) is noise as far as a resumable run is concerned.
const MIRRORED_ACTIONS = new Set([
    START_GAME,
    RECORD_SPIN,
    RECORD_PLANET_DEFEATED,
    RECORD_ORBIT_DEFEATED,
    END_SESSION,
    ABANDON_SESSION,
]);

/** The resumable part of the store, and the shape RESTORE_SESSION expects back. */
export function buildSnapshot(state) {
    return {
        planets: {
            planets: state.planetsReducer.planets,
            plutoStatus: state.planetsReducer.plutoStatus,
        },
        awards: {
            awards: state.awardsReducer.awards,
            lastAward: state.awardsReducer.lastAward,
            availableAttackAwards: state.awardsReducer.availableAttackAwards,
        },
    };
}

function toRow(state) {
    const session = state.sessionReducer;
    return {
        id: session.id,
        player_id: session.playerId,
        status: session.status,
        state: buildSnapshot(state),
        pluto_size: state.planetsReducer.plutoStatus?.properties?.size ?? 0,
        planets_defeated: session.planetsDefeated,
        orbits_defeated: session.orbitsDefeated,
        spins: session.spins,
        started_at: session.startedAt,
        ended_at: session.endedAt,
    };
}

// Backend writes are best-effort. A failure must never interrupt play, so
// nothing here is awaited by a caller and nothing rejects outwards.
function upsert(row) {
    const supabase = getSupabase();
    if (!supabase || !row.player_id || !row.id) return;
    supabase
        .from(TABLE)
        .upsert(row, { onConflict: 'id' })
        .then(({ error }) => {
            if (error) console.warn('[session] could not mirror session:', error.message);
        })
        .catch(err => console.warn('[session] could not mirror session:', err?.message || err));
}

function markAbandoned(id, playerId) {
    const supabase = getSupabase();
    if (!supabase || !playerId || !id) return;
    supabase
        .from(TABLE)
        .update({ status: ABANDONED, ended_at: new Date().toISOString() })
        .eq('id', id)
        .then(({ error }) => {
            if (error) console.warn('[session] could not abandon previous run:', error.message);
        })
        .catch(err => console.warn('[session] could not abandon previous run:', err?.message || err));
}

/**
 * Mirrors the session to the backend on lifecycle transitions. Living in
 * middleware keeps every screen free of backend knowledge: they dispatch what
 * happened, and this is the only thing that talks to Supabase.
 */
export const sessionSyncMiddleware = store => next => action => {
    const previous = store.getState().sessionReducer;
    const result = next(action);

    if (!isSupabaseConfigured || !MIRRORED_ACTIONS.has(action.type)) return result;

    // A new run replaces whatever was in progress, so close the old row first.
    if (action.type === START_GAME && previous.status === IN_PROGRESS && previous.id) {
        markAbandoned(previous.id, previous.playerId);
    }

    upsert(toRow(store.getState()));
    return result;
};

/**
 * Establishes the anonymous identity and, when there is no local run to
 * continue, looks for one left behind in the backend.
 */
export async function initSession(store) {
    if (!isSupabaseConfigured) return;
    const supabase = getSupabase();

    let playerId = null;
    try {
        const { data } = await supabase.auth.getSession();
        playerId = data?.session?.user?.id || null;
        if (!playerId) {
            const { data: signedIn, error } = await supabase.auth.signInAnonymously();
            if (error) throw error;
            playerId = signedIn?.user?.id || null;
        }
    } catch (err) {
        console.warn('[session] anonymous sign-in unavailable:', err?.message || err);
        return;
    }

    if (!playerId) return;
    store.dispatch(setPlayerId(playerId));

    // A local run always wins: it is newer by definition and needs no network.
    if (store.getState().sessionReducer.status === IN_PROGRESS) return;

    try {
        const { data, error } = await supabase
            .from(TABLE)
            .select('id, state, pluto_size, planets_defeated, orbits_defeated, spins, started_at')
            .eq('player_id', playerId)
            .eq('status', IN_PROGRESS)
            .order('updated_at', { ascending: false })
            .limit(1);
        if (error) throw error;
        const row = data && data[0];
        if (row && row.state && row.state.planets) {
            store.dispatch(offerRemoteSession(row));
        }
    } catch (err) {
        console.warn('[session] could not look for an unfinished run:', err?.message || err);
    }
}
