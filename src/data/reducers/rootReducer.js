import {combineReducers} from "redux"
import todoReducer from "./todoReducer"
import postReducer from "./postReducer"

const rootReducer=combineReducers(
    {
        todo:todoReducer,
        post:postReducer,
        
    }
);
export default rootReducer;