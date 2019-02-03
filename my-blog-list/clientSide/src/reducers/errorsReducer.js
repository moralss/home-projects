import { AUTHENTICATED, AUTHENTICATION_ERROR } from "../actionTypes";

let initialState = {
  errors: {  }
};

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state };
    case AUTHENTICATION_ERROR:

      const errors = { ...action.payload};
    console.log("reducer" , errors);
      return {
        ...state, errors: {
          email: errors.email,
          author: errors.author,
          password: errors.password,
          passwordConfirm : errors.passwordConfirm
        }
      };

    default:
      return state;
  }
};

