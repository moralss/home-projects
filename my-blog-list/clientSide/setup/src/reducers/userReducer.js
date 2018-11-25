import {
  RECIEVED_EDIT_BLOG,
  RECIEVED_LATEST_BLOG,
  RECIEVED_PROFILE,
  RECIEVED_All_BLOG
} from "../actionTypes";

const initalState = {
  profile: [],
  latestBlog: [],
  editBlog: { text: "", id: "" },
  allBlogs: []
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
    case RECIEVED_All_BLOG:
      return { ...state, allBlogs: [...action.payload] };
    default:
      return state;
  }
};
