import { AUTHENTICATED } from "../actionTypes";


export const disableAuth = () => {
    return  {
        type: AUTHENTICATED,
        payload: false
    };
  };
  