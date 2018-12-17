import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import Profile from "./Profile";
import Navbar from "./Navbar";
import * as thunks from "../action/thunk";
import { Link } from "react-router-dom";

class ViewBlogs extends Component {

  componentDidMount() {
    this.getAllBlogs();
  }


  async getAllBlogs() {
    await this.props.getAllBlogs();
  }

  render() {

    return (
      <div style={{ fontSize: 10, margin: 0 }}>
        <Profile />
        {this.props.allBlogs.map(blog => {
          return (
            <div>
              <h1> Author : {blog.name}</h1>
              <p>  text : {blog.text} </p>
              <span> updated time : {blog.updated_at} </span>
              <li>
                <Link to={`/authorblogs/${blog.author_id}`} >View Profile </Link>
              </li>
            </div>
          );
        })}
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    allBlogs: state.user.allBlogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllBlogs: () => dispatch(thunks.getAllBlogs())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewBlogs);
