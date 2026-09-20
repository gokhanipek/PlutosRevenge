import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Whether the game has a backend to talk to. Everything session-related is
 * optional: with no credentials the game is still fully playable and a run
 * still persists locally, it simply is not mirrored anywhere.
 */
export const isSupabaseConfigured = Boolean(url && anonKey);

let client = null;

/** The Supabase client, created on first use. Returns null when unconfigured. */
export function getSupabase() {
    if (!isSupabaseConfigured) return null;
    if (!client) {
        client = createClient(url, anonKey, {
            auth: {
                persistSession: true,
                autoRefreshToken: true,
                // The game is embedded in an iframe and has no auth callback
                // routes, so there is no URL fragment to detect a session in.
                detectSessionInUrl: false,
            },
        });
    }
    return client;
}

export default getSupabase;
