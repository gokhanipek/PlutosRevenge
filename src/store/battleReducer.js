import { SET_LAST_PLAYED, SET_BATTLE_PLUTO, SET_OPPONENT, SET_ORBIT, WATER, SET_OPPONENT_ATTACK } from "./constants";

const initialState = {
    opponent: {},
    pluto: {},
    lastPlayer: ''
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
    case SET_LAST_PLAYED:
      return {
        ...state,
        lastPlayer: action.payload
      }
    case SET_OPPONENT_ATTACK:
      return {
        ...state,
        attack: action.payload
      }
    default:
      return {
        ...state
      };
  }
}

export default battleReducer;