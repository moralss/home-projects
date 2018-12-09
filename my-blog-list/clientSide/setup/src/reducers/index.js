import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { errorsReducer } from './errorsReducer';
import { authorsReducer } from "./infoReducer";

let rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  errors: errorsReducer,
  authorAllBlogs: authorsReducer
});

export default rootReducer;
