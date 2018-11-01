import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';


let rootReducer = combineReducers({
    form : formReducer,

}) 


export default rootReducer;