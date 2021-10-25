import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import planetsReducer from "./planetReducer";
import awardsReducer from "./awardsReducer";
import battleReducer from "./battleReducer";

const reducers = combineReducers({
  planetsReducer,
  awardsReducer,
  battleReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
