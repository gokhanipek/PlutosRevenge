import { SET_AWARD, defaultAttackAwards, SET_AVAILABLE_ATTACKS } from "./constants";

const initialState = {
    awards: [],
    lastAward: {},
    availableAttackAwards: defaultAttackAwards
};

const awardsReducer = (state = initialState, action ) => {
  switch (action.type) {
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