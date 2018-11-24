import { AUTHENTICATED, AUTHENTICATION_ERROR } from "../action/thunk";

let initialState = {
    
};

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

