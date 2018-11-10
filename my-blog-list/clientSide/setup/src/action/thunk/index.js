import axios from "axios";
const URL = "http://localhost:3001";
let userToken = localStorage.getItem("user");

axios.defaults.headers.common["authorization"] = userToken;

export const AUTHENTICATED = "AUTHENTICATED";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const USER_INFO = "GET_USER_INFO";
export const RECIEVED_PROFILE = "RECIEVED_PROFILE" 


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

// console.log(userToken);

export const fetchUserProfile = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/profile`);
      console.log("response", res);
      dispatch({ type: RECIEVED_PROFILE, payload: res.data });
    } catch (e) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: " password"
      });
    }
  };
};



export const createBlog = (blogInfo) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/blog` , blogInfo);
      dispatch({ type: "POST_SUCCESFUL" });
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: error
      });
    }
  };
};




