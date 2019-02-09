import * as actions from "../actionTypes";

const initalState = {
    authorSingleBlog: {},


};

export const blogReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.RECIEVED_SINGLE_BLOG:
            return { ...state, authorSingleBlog: { ...action.payload } };
        default:
            return state;
    }
};
