import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import {messageReducer} from "./messageReducer";
const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer
})

export default rootReducer;