import { combineReducers } from "redux";
import authReducer from "./authSlice";
import charactersReducer from "./charactersSlice";
import teamsReducer from "./teamsSlice";

export const rootReducer = combineReducers({
  Auth: authReducer,
  Characters: charactersReducer,
  Teams: teamsReducer,
});
