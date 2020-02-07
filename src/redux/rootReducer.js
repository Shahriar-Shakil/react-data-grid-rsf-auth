import {combineReducers} from "redux";
import loginReducer from "./user/user.reducer";

export default combineReducers({
  userData: loginReducer
});
