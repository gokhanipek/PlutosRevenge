import { START_GAME, PLANETS, SET_PLANET, SET_PLUTO_STATUS, REMOVE_PLANET } from "./constants";

const initialState = {
    planets: PLANETS,
    plutoStatus: PLANETS[8]
};

const planetsReducer = (state = initialState, action ) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...initialState
      }
    case SET_PLANET:
      return {
        ...state,
        selectedPlanet: action.payload
      }
    case REMOVE_PLANET:
      return {
        ...state,
        planets: action.payload.name === 'PLUTO' ? state.planets.filter(item => item.name !== 'PLUTO') : state.planets.filter(item => item.id !== action.payload.id )  
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