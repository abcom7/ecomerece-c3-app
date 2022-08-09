import eReducer from "./eReducer";
import { combineReducers } from "redux";

const  reducers = combineReducers({
    ecom : eReducer
})
export default reducers