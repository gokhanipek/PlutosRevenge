import { PLANETS, SET_BATTLE_PLUTO, SET_OPPONENT, SET_PLANET, SET_PLUTO_STATUS } from "./constants";

const initialState = {
    opponent: {},
    pluto: {}
};

const battleReducer = (state = initialState, action ) => {
  switch (action.type) {
    case SET_OPPONENT:
      return {
        ...state,
        opponent: action.payload
      }
    case SET_BATTLE_PLUTO:
        return {
            ...state,
            pluto: action.payload
        }
    default:
      return {
        ...state
      };
  }
}

export default battleReducer;