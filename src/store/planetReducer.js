import { PLANETS, SET_PLANET, SET_PLUTO_STATUS } from "./constants";

const initialState = {
    planets: PLANETS,
    plutoStatus: PLANETS[8]
};

const planetsReducer = (state = initialState, action ) => {
  console.warn(action);
  switch (action.type) {
    case SET_PLANET:
      return {
        ...state,
        selectedPlanet: action.payload
      }
    case SET_PLUTO_STATUS:
      return {
        ...state,
        plutoStatus: action.payload
      }
    default:
      return {
        ...state
      };
  }
}

export default planetsReducer;