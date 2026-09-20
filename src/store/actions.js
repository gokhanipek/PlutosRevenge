import { START_GAME, SET_PLANET, SET_AWARD, SET_PLUTO_STATUS, SET_AVAILABLE_ATTACKS, SET_OPPONENT, SET_BATTLE_PLUTO, SET_ORBIT, SET_LAST_PLAYED, SET_OPPONENT_DAMAGE, SET_OPPONENT_ATTACK, REMOVE_PLANET, SET_PLAYER_ID, RECORD_SPIN, RECORD_PLANET_DEFEATED, RECORD_ORBIT_DEFEATED, END_SESSION, ABANDON_SESSION, OFFER_REMOTE_SESSION, DISCARD_REMOTE_SESSION, RESTORE_SESSION, DECREMENT_ORBIT_COUNT, SET_TURN } from "./constants";
import { awardAtIndex } from "./awards";

export const setPlanet = (id) => {
    return {
        type: SET_PLANET,
        payload: id
    }
}

export const setPlutoStatus = (item) => {
    return {
        type: SET_PLUTO_STATUS,
        payload: item
    }
}

export const setAvailableAttacks = (item) => {
    return {
        type: SET_AVAILABLE_ATTACKS,
        payload: item
    }
}

export const setOpponent = (item) => {
    return {
        type: SET_OPPONENT,
        payload: item
    }
}

export const setBattlePluto = (item) => {
    return {
        type: SET_BATTLE_PLUTO,
        payload: item
    }
}

export const setLastPlayed = item => {
    return {
        type: SET_LAST_PLAYED,
        payload: item
    }
}

export const setOpponentDamage = item => {
    return {
        type: SET_OPPONENT_DAMAGE,
        payload: item
    }
}

export const setOpponentAttack = item => {
    return {
        type: SET_OPPONENT_ATTACK,
        payload: item
    }
}

export const removePlanet = item => {
    return {
        type: REMOVE_PLANET,
        payload: item
    }
}

export const startGame = () => ({type: START_GAME})

export const setPlayerId = id => ({ type: SET_PLAYER_ID, payload: id })

export const recordSpin = () => ({ type: RECORD_SPIN })

export const recordPlanetDefeated = () => ({ type: RECORD_PLANET_DEFEATED })

export const recordOrbitDefeated = () => ({ type: RECORD_ORBIT_DEFEATED })

/** Ends the run as won or lost. */
export const endSession = status => ({ type: END_SESSION, payload: status })

export const abandonSession = () => ({ type: ABANDON_SESSION })

/** A run found in the backend, waiting for the player to accept or decline it. */
export const offerRemoteSession = session => ({ type: OFFER_REMOTE_SESSION, payload: session })

export const discardRemoteSession = () => ({ type: DISCARD_REMOTE_SESSION })

/** Adopts a recovered run: session metadata plus the game slices it belongs to. */
export const restoreSession = snapshot => ({ type: RESTORE_SESSION, payload: snapshot })

export const setOrbit = () => ({ type: SET_ORBIT })

/**
 * The spin result is an index into the award table, which is also the index of
 * the slice the indicator lands on — so the award granted is always the award
 * the player watched come to rest.
 */
export const selectAward = index => ({
    type: SET_AWARD,
    payload: awardAtIndex(index)
})

export const decrementOrbitCount = planetIndex => ({ type: DECREMENT_ORBIT_COUNT, payload: planetIndex })

export const setTurn = turnState => ({ type: SET_TURN, payload: turnState })