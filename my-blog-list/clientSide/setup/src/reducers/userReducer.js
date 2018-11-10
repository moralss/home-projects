import { RECIEVED_PROFILE } from "../action/thunk";

const initalState = {
  profile: []
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case RECIEVED_PROFILE:
      return { ...state, profile: [action.payload] };

    default:
      return state;
  }
};
