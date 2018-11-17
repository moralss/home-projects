import axios from "axios";
const URL = "http://localhost:3001";

let userToken = localStorage.getItem("user");
axios.defaults.headers.common["authorization"] = userToken;
export const AUTHENTICATED = "AUTHENTICATED";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const USER_INFO = "GET_USER_INFO";
export const RECIEVED_PROFILE = "RECIEVED_PROFILE";
export const RECIEVED_LATEST_BLOG = "RECIEVED_LATEST_BLOG";
export const DELETE_SUCCESFUL = "DELETE_SUCCESFUL";
export const POST_SUCCESFUL = "POST_SUCCESFUL";
export const RECIEVED_EDIT_BLOG = "RECIEVED_EDIT_BLOG";

export const signInAction = (credentials, history) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/signin`, credentials);
      setTimeout(() => {
        localStorage.setItem("user", res.data.token);
      }, 3000);
      dispatch({ type: AUTHENTICATED });
    } catch (error) {
      history.push("/addblog");
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

function setAxiosHeader() {
  let user = localStorage.getItem("user");
  const headers = { headers: { authorizationc: user } };
  return headers;
}

export const fetchUserProfile = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/profile`,setAxiosHeader);
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

export const createBlog = blogInfo => {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/blog`, blogInfo);
      dispatch({ type: POST_SUCCESFUL });
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: error
      });
    }
  };
};

export const getLatestBlog = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/blog`);
      dispatch({ type: RECIEVED_LATEST_BLOG, payload: res.data });
    } catch (e) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: " password"
      });
    }
  };
};

export const getEditBlog = blogId => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/editblog/${blogId}`);
      dispatch({ type: RECIEVED_EDIT_BLOG, payload: res.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteBlog = blogId => {
  return async dispatch => {
    try {
      await axios.delete(`${URL}/blog`, { data: { id: blogId } });
      dispatch({ type: DELETE_SUCCESFUL });
    } catch (e) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: " password"
      });
    }
  };
};

export const updateBlog = (blogInfo, history) => {
  return async dispatch => {
    let user = localStorage.getItem("user");
    const headers = { headers: { authorizationc: user } };
    try {
      await axios.put(`${URL}/editblog`, blogInfo, headers);
      dispatch({ type: " BLOG_SUCCESFUL_UPDATED" });
      history.push("/addblog");
    } catch (e) {
      dispatch({
        type: "UPDATE_ERROR",
        payload: " password"
      });
    }
  };
};

export const getSingleBlog = id => {};
