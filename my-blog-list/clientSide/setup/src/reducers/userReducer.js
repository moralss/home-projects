import * as actions from "../actionTypes";

const initalState = {
  profile: {},
  latestBlog: [],
  editBlog: { text: "", id: "" },
  allBlogs: []
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.RECIEVED_PROFILE:
      return { ...state, profile: { ...action.payload } };
    case actions.RECIEVED_EDIT_BLOG:
      const payload = action.payload[0];
      return { ...state, editBlog: { text: payload.text, id: payload.id } };
    case actions.RECIEVED_LATEST_BLOG:
      return { ...state, latestBlog: [...action.payload] };
    case actions.RECIEVED_All_BLOG:
      return { ...state, allBlogs: [...action.payload] };
    default:
      return state;
  }
};
