import * as actions from '../../actionTypes';
import axios from "axios";
import history from "../../history";

const URL = "http://localhost:3001";

export const registerUser = (credentials) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/signin`, credentials);
      dispatch({ type: actions.AUTHENTICATED, payload: { auth: true, userProfile: res.data } });
      localStorage.setItem("user", res.data.token);
      history.push("/addblog");

    } catch (error) {
      dispatch({
        type: actions.AUTHENTICATION_ERROR,
        payload: error.response.data
      });
    }
  };
};

export function verifyUser(credentials) {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/login`, credentials);
      dispatch({ type: actions.AUTHENTICATED, payload: { auth: true, userProfile: res.data } });

      localStorage.setItem("user", res.data.token);
      history.push("/addblog");
    } catch (error) {
      dispatch({
        type: actions.AUTHENTICATION_ERROR,
        payload: error.response.data
      });
    }
  };
}
