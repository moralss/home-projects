import axios from "axios";
import * as actions from '../../actionTypes';

const URL = "http://localhost:3001";
let userToken = localStorage.getItem("user");
axios.defaults.headers.common["authorization"] = userToken;


function setAxiosHeader() {
  let user = localStorage.getItem("user");
  const headers = { headers: { authorizationc: user } };
  return headers;

}
export const fetchUserProfile = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/profile`, setAxiosHeader);
      console.log("response", res);
      dispatch({ type: actions.RECIEVED_PROFILE, payload: res.data });
    } catch (e) {
      dispatch({
        type: actions.AUTHENTICATION_ERROR,
        payload: " password"
      });
    }
  };
};

export const createBlog = blogInfo => {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/blog`, blogInfo);
      dispatch({ type: actions.POST_SUCCESFUL });
    } catch (error) {
      dispatch({
        type: actions.AUTHENTICATION_ERROR,
        payload: error
      });
    }
  };
};

export const getLatestBlog = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/blog`);
      dispatch({ type: actions.RECIEVED_LATEST_BLOG, payload: res.data });
    } catch (e) {
      dispatch({
        type: actions.AUTHENTICATION_ERROR,
        payload: " password"
      });
    }
  };
};

export const getEditBlog = blogId => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/editblog/${blogId}`);
      dispatch({ type: actions.RECIEVED_EDIT_BLOG, payload: res.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getAllBlogs = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/allblogs`);
      dispatch({ type: actions.RECIEVED_All_BLOG, payload: res.data });
    } catch (e) {
      console.log(e);
    }
  };
};


export const deleteBlog = blogId => {
  return async dispatch => {
    try {
      await axios.delete(`${URL}/blog`, { data: { id: blogId } });
      dispatch({ type: actions.DELETE_SUCCESFUL });
    } catch (e) {
      dispatch({
        type: actions.AUTHENTICATION_ERROR,
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




export const getSingleBlog = id => { };



