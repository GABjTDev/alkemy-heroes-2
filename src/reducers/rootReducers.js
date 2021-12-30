import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { teamsReducer } from "./teamsReducer";

export default combineReducers({
    auth: authReducer,
    teams: teamsReducer
})

