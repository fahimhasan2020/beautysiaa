import {combineReducers} from "redux";
import auth from './reducers/auth'
import themingstore from "./reducers/locale"

let reducer;
export default reducer = combineReducers({
    auth:auth,
    themingstore:themingstore
})