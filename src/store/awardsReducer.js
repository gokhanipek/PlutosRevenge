import { SET_AWARD, defaultAttackAwards, SET_AVAILABLE_ATTACKS, START_GAME, RESTORE_SESSION } from "./constants";

const initialState = {
    awards: [],
    lastAward: {},
    availableAttackAwards: defaultAttackAwards
};

const awardsReducer = (state = initialState, action ) => {
  switch (action.type) {
    // A new run starts with no awards collected and the full attack pool. This
    // used to leak across runs, since only the planets slice reset.
    case START_GAME:
      return {
        ...initialState
      }
    // Adopting a run recovered from the backend.
    case RESTORE_SESSION:
      return {
        ...initialState,
        ...(action.payload.awards || {})
      }
    case SET_AWARD:
      return {
        ...state,
        awards: [
            ...state.awards,
            action.payload
        ],
        lastAward: action.payload
      }
    case SET_AVAILABLE_ATTACKS: 
      return {
          ...state,
          availableAttackAwards: action.payload
      }
    default:
      return {
        ...state
      };
  }
}

export default awardsReducer;