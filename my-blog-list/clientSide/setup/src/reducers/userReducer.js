import {
  RECIEVED_EDIT_BLOG,
  RECIEVED_LATEST_BLOG,
  RECIEVED_PROFILE
} from "../action/thunk";

const initalState = {
  profile: [],
  latestBlog: [],
  editBlog: { text: "", id: "" }
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case RECIEVED_PROFILE:
      return { ...state, profile: [action.payload] };
    case RECIEVED_EDIT_BLOG:
      const payload = action.payload[0];
      console.log("payload", action.payload[0]);
      return { ...state, editBlog: { text: payload.text, id: payload.id } };

    case RECIEVED_LATEST_BLOG:
      return { ...state, latestBlog: [...action.payload] };
    default:
      return state;
  }
};
