import * as actions from "../actionTypes";

const initalState = {
    authorsBlogs: [],
    like: 0,
    likes: 0
};


export const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.RECIEVED_BLOGS_FOR_AUTHOR:
            return { ...state, authorsBlogs: [...action.payload] };
        case actions.STORE_IF_LIKED:
            return { ...state, like: action.payload };
        case actions.RECIEVED_TOTAL_LIKES:
            return { ...state, likes: action.payload };
        default:
            return state;
    }
};