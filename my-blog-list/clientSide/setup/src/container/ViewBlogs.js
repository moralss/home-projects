import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import Profile from "./Profile";
import Navbar from "./Navbar";
import * as thunks from "../action/thunk";

class ViewBlogs extends Component {
  componentDidMount() {
    this.getAllBlogs();
  }

  displayBlogs() {
    if (this.props.allBlogs.length === 0) {
      return <div> loading... </div>;
    } else {
      return (
        <div style={{ fontSize: 10, margin: 0 }}>
          {this.props.allBlogs.map(blog => {
            return (
              <div>
                <h1> Author : {blog.name}</h1>
                <p>  text : {blog.text} </p>
                <span> updated time : {blog.updated_at} </span>
              </div>
            );
          })}
        </div>
      );
    }
  }

  async getAllBlogs() {
    await this.props.getAllBlogs();
  }

  render() {
    console.log("all blogs ", this.props.allBlogs);
    return (
      <div className="ViewBlogs">
        <Profile />
        <h1> All Blogs </h1>

        {this.displayBlogs()}
        <button> Read more </button>
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
