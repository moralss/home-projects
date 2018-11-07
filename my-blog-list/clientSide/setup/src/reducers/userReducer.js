const initalState = {
  auth: false,
  
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case "AUTH_TRUE":
      return { ...state, auth: true };
    case "AUTH_FALSE":
      return { ...state, auth: false };

    default:
      return state;
  }
};
