import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { errorsReducer } from './errorsReducer';
import { profileReducer } from "./profileReducer";
import { commentsReducer } from "./commentsReducer";
import { blogReducer } from "./blogReducer";
import { uiReducer } from "./uiReducer";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

let rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  errors: errorsReducer,
  profile: profileReducer,
  comments: commentsReducer,
  blog: blogReducer,
  route: routerReducer,
  ui: uiReducer
});

export default rootReducer;
