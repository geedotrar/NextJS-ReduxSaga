import { combineReducers } from "redux";
import RegionReduce from "./regionReducer";

const rootReducer = combineReducers({
    regionState: RegionReduce
})

export default rootReducer