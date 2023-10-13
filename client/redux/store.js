import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./authReducer/reducer";
import { searchReducer } from "./searchReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  authReducer,
  searchReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
