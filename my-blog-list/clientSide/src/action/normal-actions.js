import * as actions from "../actionTypes";

export const disableAuth = () => {
    return {
        type: actions.AUTHENTICATED,
        payload: { auth: false }
    };
}




export const toggleSearchBar = (status) => {
    return {
        type: actions.TOGGLE_SEARCH_BAR,
        payload: status
    };
};

