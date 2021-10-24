import { PLANETS, SET_PLANET } from "./constants";

const initialState = {
    planets: PLANETS
};

const planetsReducer = (state = initialState, action ) => {
  console.warn(action);
  switch (action.type) {
    case SET_PLANET:
      return {
        ...state,
        selectedPlanet: action.payload
      }
    default:
      return {
        ...state
      };
  }
}

export default planetsReducer;