import { SET_PLANET } from "./constants";

export const setPlanet = (id) => {
    return {
        type: SET_PLANET,
        payload: id
    }
}