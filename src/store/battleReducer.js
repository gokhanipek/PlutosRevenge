import { SET_LAST_PLAYED, SET_BATTLE_PLUTO, SET_OPPONENT, SET_ORBIT, WATER, SET_OPPONENT_ATTACK, START_GAME, RESTORE_SESSION, SET_TURN, TURN_PLUTO } from "./constants";

const initialState = {
    opponent: {},
    pluto: {},
    lastPlayer: '',
    turn: TURN_PLUTO
};

const battleReducer = (state = initialState, action ) => {
  switch (action.type) {
    // Battle state is transient: it is neither persisted nor carried between
    // runs, so a new or recovered run always starts with an empty arena.
    case START_GAME:
    case RESTORE_SESSION:
      return {
        ...initialState
      }
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
    case SET_TURN:
      return {
        ...state,
        turn: action.payload
      }
    default:
      return {
        ...state
      };
  }
}

export default battleReducer;