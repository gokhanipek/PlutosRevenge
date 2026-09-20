import {
    START_GAME,
    SET_PLAYER_ID,
    RECORD_SPIN,
    RECORD_PLANET_DEFEATED,
    RECORD_ORBIT_DEFEATED,
    END_SESSION,
    ABANDON_SESSION,
    OFFER_REMOTE_SESSION,
    RESTORE_SESSION,
    DISCARD_REMOTE_SESSION,
    IN_PROGRESS,
    ABANDONED,
} from './constants';

// `status: null` means there is no run at all, which is a different thing from a
// run that ended. A run exists from START_GAME until it is won, lost or abandoned.
const initialState = {
    id: null,
    playerId: null,
    status: null,
    startedAt: null,
    endedAt: null,
    spins: 0,
    planetsDefeated: 0,
    orbitsDefeated: 0,
    // A run found in the backend that the player has not yet accepted or declined.
    remoteOffer: null,
};

const newId = () =>
    typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        // Starting a game always begins a fresh run. Whatever was in progress is
        // abandoned by being replaced; the previous row is marked abandoned by the
        // sync layer before the new one is written.
        case START_GAME:
            return {
                ...initialState,
                playerId: state.playerId,
                id: newId(),
                status: IN_PROGRESS,
                startedAt: new Date().toISOString(),
            };
        case SET_PLAYER_ID:
            return { ...state, playerId: action.payload };
        case RECORD_SPIN:
            return { ...state, spins: state.spins + 1 };
        case RECORD_PLANET_DEFEATED:
            return { ...state, planetsDefeated: state.planetsDefeated + 1 };
        case RECORD_ORBIT_DEFEATED:
            return { ...state, orbitsDefeated: state.orbitsDefeated + 1 };
        case END_SESSION:
            return {
                ...state,
                status: action.payload,
                endedAt: new Date().toISOString(),
            };
        case ABANDON_SESSION:
            return { ...state, status: ABANDONED, endedAt: new Date().toISOString() };
        case OFFER_REMOTE_SESSION:
            return { ...state, remoteOffer: action.payload };
        case DISCARD_REMOTE_SESSION:
            return { ...state, remoteOffer: null };
        // Adopting a run recovered from the backend. The game slices restore
        // themselves from the same action.
        case RESTORE_SESSION:
            return {
                ...state,
                ...action.payload.session,
                playerId: state.playerId,
                remoteOffer: null,
            };
        default:
            return state;
    }
};

export default sessionReducer;

/** True when there is a run the player could return to. */
export const selectRunInProgress = state => state.sessionReducer.status === IN_PROGRESS;

export const selectRemoteOffer = state => state.sessionReducer.remoteOffer;
