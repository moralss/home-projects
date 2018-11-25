import React, { Component } from "react";
// import "./App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import Profile from "./Profile";
import { reset, reduxForm, Field } from "redux-form";
import UserBlogs from "./UserBlogs";

class AddBlog extends Component {

  componentWillMount() {
    this.fetch();
  }

  fetch = async () => {
    await this.props.fetchUserProfile();

  }

  handleSubmit = async data => {
    await this.props.createBlog(data);
    await this.props.getLatestBlog();
    await this.props.fetchUserProfile()
  };



  render() {
    console.log("hello " , this.props.profile);
    const { handleSubmit } = this.props;
    return (
      <div className="AddBlog">

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

function mapStateToProps(state) {
  return {
    state: state,
    profile: state.user.profile
  }
}

  function mapDispatchToProps(dispatch) {
    return {
      createBlog: blogInfo => dispatch(thunks.createBlog(blogInfo)),
      getLatestBlog: () => dispatch(thunks.getLatestBlog()),
      fetchUserProfile: () => dispatch(thunks.fetchUserProfile())
    };
  }

  const afterSubmit = (result, dispatch) => dispatch(reset("addBlogForm"));

  let addBlogConfig = reduxForm({
    form: "addBlogForm",
    onSubmitSuccess: afterSubmit
  })(AddBlog);

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(addBlogConfig);
