import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import Profile from "./Profile";
import Navbar from "./Navbar";


class ViewBlogs extends Component {
  render() {
    return (
      <div className="ViewBlogs">
        <Profile />

        <button onClick={() => this.fetchUsers}> Click Me </button>
        <h1> All Blogs </h1>

        <h1>Author : Moral </h1>
        <h3> Programming for dummies </h3>
        <p>
          Even the all-powerful Pointing has no control about the blind texts
        </p>

        <button> Read more </button>
      </div>
    );
  }
}

export default connect()(ViewBlogs);
