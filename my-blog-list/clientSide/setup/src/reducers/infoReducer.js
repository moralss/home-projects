import {
    RECIEVED_BLOGS_FOR_USER
} from "../actionTypes";

const initalState = {
    authorsBlogs: [],
};

export const authorsReducer = (state = initalState, action) => {
    switch (action.type) {
        case RECIEVED_BLOGS_FOR_USER:
            return { ...state, authorsBlogs: [...action.payload] };
        default:
            return state;
    }
};
