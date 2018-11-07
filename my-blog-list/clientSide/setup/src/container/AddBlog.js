import React, { Component } from "react";
// import "./App.css";

class AddBlog extends Component {
  render() {
    return (
      <div className="AddBlog">
      
      <h1>  Enter a blog post </h1>

      <label> blog </label>
        <textarea/>

        <button> Submit </button>
      </div>
    );
  }
}

export default AddBlog;
