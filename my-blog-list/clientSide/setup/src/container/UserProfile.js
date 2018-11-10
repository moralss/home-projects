import React, { Component } from "react";
// import "./App.css";
import { connect } from "react-redux";
import * as actions from "../action/thunk";

class AddBlog extends Component {


  render() {
    return (
      <div className="AddBlog">

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  };
}



function mapDispatchToProps(dispatch) {
  return {
    fetchUserInfo: () => dispatch(actions.fetchUserInfo())
  };
}



export default connect(

  mapDispatchToProps
)(AddBlog);
