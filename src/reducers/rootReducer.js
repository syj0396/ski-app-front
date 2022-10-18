import {combineReducers} from "redux";
import usersReducer from './auth';

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer;