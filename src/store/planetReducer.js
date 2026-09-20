import { START_GAME, PLANETS, SET_PLANET, SET_PLUTO_STATUS, REMOVE_PLANET, RESTORE_SESSION, DECREMENT_ORBIT_COUNT } from "./constants";

// Build orbitCounts from each planet's properties
const buildOrbitCounts = () => {
    return PLANETS.reduce((acc, planet, index) => {
        acc[index] = planet.properties?.orbitCount || 0;
        return acc;
    }, {});
};

const initialState = {
    planets: PLANETS,
    plutoStatus: PLANETS[8],
    orbitCounts: buildOrbitCounts()
};

const planetsReducer = (state = initialState, action ) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...initialState
      }
    // Adopting a run recovered from the backend.
    case RESTORE_SESSION:
      return {
        ...initialState,
        ...(action.payload.planets || {})
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
    case DECREMENT_ORBIT_COUNT:
      return {
        ...state,
        orbitCounts: {
          ...state.orbitCounts,
          [action.payload]: Math.max(0, (state.orbitCounts[action.payload] || 0) - 1)
        }
      }
    default:
      return {
        ...state
      };
  }
}

export default planetsReducer;