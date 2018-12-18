import * as actions from "../actionTypes";

let initialState = {
  authenticated: false,
  errors: { email: "", password: "", author: "" }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTHENTICATED:
      return { ...state, authenticated: action.payload };
    case actions.AUTHENTICATION_ERROR:
      const errors = { ...action.payload.error };

      return { ...state, errors: { ...errors } };

    default:
      return state;
  }
};

