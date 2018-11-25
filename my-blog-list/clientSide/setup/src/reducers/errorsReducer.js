import { AUTHENTICATED, AUTHENTICATION_ERROR } from "../actionTypes";

let initialState = {
  errors: { email: "", password: "", author: "" }
};

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case AUTHENTICATION_ERROR:

      const errors = { ...action.payload.errors };
    console.log("reducer" , errors);
      return {
        ...state, errors: {
          email: errors.email,
          author: errors.author,
          password: errors.password
        }
      };

    default:
      return state;
  }
};

