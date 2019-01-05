import React, { Component } from "react";
// import "./App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import Profile from "./Profile";
import { reset, reduxForm, Field } from "redux-form";
import UserBlogs from "./UserBlogs";

class AddBlog extends Component {


  componentWillMount(){
    
  }


  handleSubmit = async data => {
    await this.props.createBlog(data);
    await this.props.getUserBlogs();
  };


  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="AddBlog">
        <Profile />
        <h1> Add a new blog post </h1>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <label> enter blog </label>
          <Field type="text" name="text" component="input" />
          <button> Submit </button>
        </form>
        <UserBlogs />

      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    createBlog: blogInfo => dispatch(thunks.createBlog(blogInfo)),
    getUserBlogs: () => dispatch(thunks.getUserBlogs())
  };
}

const afterSubmit = (result, dispatch) => dispatch(reset("addBlogForm"));

let addBlogConfig = reduxForm({
  form: "addBlogForm",
  onSubmitSuccess: afterSubmit
})(AddBlog);

export default connect(
  null,
  mapDispatchToProps
)(addBlogConfig);
