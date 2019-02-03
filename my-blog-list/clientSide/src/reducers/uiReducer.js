import * as actions from "../actionTypes";

const initalState = {
    status: false,
};

export const uiReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.TOGGLE_SEARCH_BAR:
            return { ...state, status: action.payload };

        default:
            return state;
    }
};
