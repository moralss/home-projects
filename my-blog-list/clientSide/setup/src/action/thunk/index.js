import axios from "axios";
import * as actions from '../../actionTypes';
import { setAxiosHeader } from "../../utils/setAxiosHeader";
import history from "../../history";

const URL = "http://localhost:3001";






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

export const addLike = blogId => {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/like`, blogId, setAxiosHeader());
      dispatch({ type: "actions.POST_SUCCESFUL " });
      dispatch({ type: actions.STORE_IF_LIKED, payload: 1 });
    } catch (error) {
      dispatch({
        type: "actions.AUTHENTICATION_ERROR",
        payload: error
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



export const updateBlog = (blogInfo) => {
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
  console.log("authorId", authorId);
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/authorinfo/${authorId}`, setAxiosHeader());
      dispatch({
        type: actions.RECIEVED_BLOGS_FOR_AUTHOR,
        payload: res.data
      })
    } catch (e) {
      console.log(e);
    }
  };
};


export const getTotalLikes = (blogId) => {
  return async dispatch => {
    try {
      const res = await axios.get(`${URL}/likes/${blogId}`, setAxiosHeader());
      console.log("res" , res.data.sum);
      dispatch({
        type: actions.RECIEVED_TOTAL_LIKES,
        payload: res.data.sum
      })
    } catch (e) {
      console.log(e);
    }
  };
};


export const dislikeBlog = (blogId) => {
  return async dispatch => {
    try {
      let res = await axios.put(`${URL}/like`, blogId, setAxiosHeader());
      dispatch({ type: actions.STORE_IF_LIKED, payload: 0 });
    } catch (e) {
      console.log(e);
      dispatch({
        type: "UPDATE_ERROR",
        payload: " password"
      });
    }
  };
};


export const getIfLiked = () => {
  return async dispatch => {
    try {
      let res = await axios.get(`${URL}/like`, setAxiosHeader());
      console.log("response", res.data.liked);
      dispatch({ type: actions.STORE_IF_LIKED, payload: res.data.liked });
    } catch (e) {
      console.log(e);
      dispatch({
        type: "UPDATE_ERROR",
        payload: " password"
      });
    }
  };
};

export const getSingleBlog = id => { };



