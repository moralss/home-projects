import * as actions from '../../actionTypes';
import axios from "axios";

const URL = "http://localhost:3001";

export const signInAction = (credentials, history) => {
    return async dispatch => {
      try {
        const res = await axios.post(`${URL}/signin`, credentials);
          localStorage.setItem("user", res.data.token);
        dispatch({ type: actions.AUTHENTICATED });
        history.push("/addblog");
  
      } catch (error) {
        dispatch({
          type: actions.AUTHENTICATION_ERROR,
          payload: error.response.data
        });
      }
    };
  };
  
  export function loginInAction(credentials, history) {
    return async dispatch => {
      try {
        const res = await axios.post(`${URL}/login`, credentials);
        localStorage.setItem("user", res.data.token);
        dispatch({ type: actions.AUTHENTICATED });
        history.push("/addblog");
      } catch (error) {
        dispatch({
          type: actions.AUTHENTICATION_ERROR,
          payload: "Invalid email or password"
        });
      }
    };
  }
  