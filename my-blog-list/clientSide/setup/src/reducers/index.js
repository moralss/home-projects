import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

let rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer
});

export default rootReducer;
