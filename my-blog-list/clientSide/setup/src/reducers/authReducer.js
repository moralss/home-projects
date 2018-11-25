import { AUTHENTICATED, AUTHENTICATION_ERROR } from "../actionTypes";

let initialState = {
  authenticated: false,
  errors: { email: "", password: "", author: "" }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case AUTHENTICATION_ERROR:
      const errors = { ...action.payload.error };
      
      return { ...state, errors:  {...errors}  };

    default:
      return state;
  }
};

