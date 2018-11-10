import {combineReducers} from 'redux';


const fetchMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case "RECIVED_MESSAGE":
      console.log("recived message");
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  message: fetchMessageReducer
});


export default rootReducer;

