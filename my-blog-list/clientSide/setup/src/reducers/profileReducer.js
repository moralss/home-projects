import {
    RECIEVED_BLOGS_FOR_USER
} from "../actionTypes";

const initalState = {
    likes: 0,
};

export const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case RECIEVED_BLOGS_FOR_USER:
            return { ...state, authorsBlogs: [...action.payload] };
        default:
            return state;
    }
};
