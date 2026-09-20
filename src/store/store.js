import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { sessionSyncMiddleware } from "../lib/sessionSync";
import planetsReducer from "./planetReducer";
import awardsReducer from "./awardsReducer";
import battleReducer from "./battleReducer";
import sessionReducer from "./sessionReducer";

const reducers = combineReducers({
  planetsReducer,
  awardsReducer,
  battleReducer,
  sessionReducer
});

// A run survives a reload from local storage alone, with no network involved —
// that is what lets the route gate decide synchronously whether a run exists.
// The battle slice is deliberately excluded: a rehydrated half-battle would land
// on a screen whose timers, HP and turn order no longer agree with each other.
const persistConfig = {
  key: "plutos-revenge",
  version: 1,
  storage,
  whitelist: ["planetsReducer", "awardsReducer", "sessionReducer"]
};

const store = createStore(
  persistReducer(persistConfig, reducers),
  composeWithDevTools(applyMiddleware(thunk, sessionSyncMiddleware))
);

export const persistor = persistStore(store);

export default store;
