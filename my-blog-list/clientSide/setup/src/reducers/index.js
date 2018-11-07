import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {authReducer} from './authReducer';


let rootReducer = combineReducers({
    form : formReducer,
    auth:authReducer

}) 


export default rootReducer;