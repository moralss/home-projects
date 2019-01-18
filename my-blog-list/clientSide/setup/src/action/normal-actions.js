import * as actions from "../actionTypes";



export const toggleSearchBar = (status) => {
    return {
        type: actions.TOGGLE_SEARCH_BAR,
        payload: status
    };
};

