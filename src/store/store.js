import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import planetsReducer from "./planetReducer";
import awardsReducer from "./awardsReducer";
const reducers = combineReducers({
  planetsReducer,
  awardsReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
