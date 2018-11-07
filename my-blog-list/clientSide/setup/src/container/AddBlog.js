import React, { Component } from "react";
// import "./App.css";
import { connect } from "react-redux";

class AddBlog extends Component {


  render() {
    console.log("auth" , this.props.auth);
    return (
      <div className="AddBlog">
        <h1> Enter a blog post </h1>

        <label> blog </label>
        <textarea />

        <button> Submit </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}

export default connect(
  mapStateToProps,
  null
)(AddBlog);
