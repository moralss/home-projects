import * as actions from "../actionTypes";


const initalState = {
    authorsBlogs: [],
    like: 0
};

export const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.RECIEVED_BLOGS_FOR_USER:
            return { ...state, authorsBlogs: [...action.payload] };
        case actions.STORE_IF_LIKED:
        
            return { ...state, like: action.payload };
        default:
            return state;
    }
};