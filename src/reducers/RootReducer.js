import { combineReducers } from "redux";
import FinishCorridorReducer from "./FinishCorridorReducer";

export default combineReducers({
    finishCorridor: FinishCorridorReducer
});
