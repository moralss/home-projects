import axios from "axios";
import * as actions from '../../actionTypes';
import jwtDecode from "jwt-decode";
const URL = "http://localhost:3001";

function setAxiosHeader() {
  let user = localStorage.getItem("user");
  const headers = { headers: { authorization: user } };
  return headers;
}


export const fetchUserProfile = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/profile`, setAxiosHeader());
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
      const res = await axios.post(`${URL}/blog`, blogInfo, setAxiosHeader());
      dispatch({ type: actions.POST_SUCCESFUL });
    } catch (error) {
      dispatch({
        type: actions.AUTHENTICATION_ERROR,
        payload: error
      });
    }
  };
};

export const getUserBlogs = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/blog`, setAxiosHeader());
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
      const res = await axios.get(`${URL}/editblog/${blogId}`, setAxiosHeader());
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
      dispatch({ type: actions.RECIEVED_All_BLOG, payload: res.data }, setAxiosHeader());
    } catch (e) {
      console.log(e);
    }
  };
};


export const deleteBlog = blogId => {
  return async dispatch => {
    try {
      await axios.delete(`${URL}/blog`, { data: { id: blogId } }, setAxiosHeader());
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
    try {
      await axios.put(`${URL}/editblog`, blogInfo, setAxiosHeader());
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


export const getBlogsForAuthor = (authorId) => {
  console.log("authorId" , authorId);
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/userinfo/${authorId}`, setAxiosHeader());
      dispatch({
        type: actions.RECIEVED_BLOGS_FOR_USER,
        payload: res.data
      })
    } catch (e) {
      console.log(e);
    }
  };
};


export const getSingleBlog = id => { };



