import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { errorsReducer } from './errorsReducer';
import {profileReducer} from "./profileReducer";
import {commentsReducer} from "./commentsReducer";


let rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  errors: errorsReducer,
  profile: profileReducer,
  comments : commentsReducer
});

export default rootReducer;
