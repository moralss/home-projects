import axios from "axios";
const URL = "http://localhost:3001";

export const AUTHENTICATED = "AUTHENTICATED";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";

export const signInAction = (credentials, history) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/signin`, credentials);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem("user", res.data.token);
      history.push("/addblog");
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    }
  };
};

export function loginInAction(credentials, history) {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/login`, credentials);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem("user", res.data.token);
      history.push("/addblog");
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    }
  };
}
