import { SET_PLANET, SET_AWARD, SET_PLUTO_STATUS, SET_AVAILABLE_ATTACKS, SET_OPPONENT,SET_BATTLE_PLUTO } from "./constants";

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

export const findAward = id => {
    switch (id) {
        case 1:
            return {
                type: SET_AWARD,
                payload: {
                    id,
                    message: 'You lost -10 size!',
                    effect: -10
                }
            };
        case 2:
            return {
                type: SET_AWARD,
                payload: {
                    id,
                    message: 'You won +10 size upgrade!',
                    effect: 10
                }
            };
        case 3:
            return {
                type: SET_AWARD,
                payload: {
                    id,
                    message: 'You won +250 size upgrade!',
                    effect: 250
                }
            }; 
        case 4: 
        return {
            type: SET_AWARD,
            payload: {
                id,
                message: 'You won +100 size upgrade!',
                effect: 100
            }
        };
        case 5: 
        return {
            type: SET_AWARD,
            payload: {
                id,
                message: 'You lost -90 size!',
                effect: -90
            }
        };
        case 6:
            return {
                type: SET_AWARD,
                payload: {
                    id,
                    message: 'You won a new attack!',
                    effect: id
                }
            };
        case 7:
            return {
                type: SET_AWARD,
                payload: {
                    id,
                    message: 'You lost -50 size!',
                    effect: -50
                }
            };
        case 8:
            return {
                type: SET_AWARD,
                payload: {
                    id,
                    message: 'You lost -10 size!',
                    effect: -10
                }
            };
        case 9:
            return {
                type: SET_AWARD,
                payload: {
                    id,
                    message: 'You won +10 size upgrade!',
                    effect: 10
                }
            };
        case 10:
            return {
                type: SET_AWARD,
                payload: {
                    id,
                    message: 'You won +50 size upgrade',
                    effect: 50
                }
            };
        default:
            return 'Try Again'
    }
}