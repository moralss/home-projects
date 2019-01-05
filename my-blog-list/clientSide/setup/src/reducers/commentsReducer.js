import * as actions from "../actionTypes";

const initalState = {
  allCommentsForblog: []

};

export const commentsReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.RECIEVED_COMMENTS:
      return { ...state, allCommentsForblog: [ ...action.payload ] };
    default:
      return state;
  }
};
