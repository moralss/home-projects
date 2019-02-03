import React, { Component } from "react";
// import "./App.css";
import * as normal from "../action/normal-actions";

import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { reset, reduxForm, Field } from "redux-form";
import { FormSide ,AddBlogContainer, HeaderLarge } from "../styles/styles";
import UserBlogs from "./UserBlogs";
import TextArea from '../components/TextArea';


class AddBlog extends Component {


  componentWillMount() {
    this.props.toggleSearchBar(false)


  }


  handleSubmit = async data => {
    await this.props.createBlog(data);
    await this.props.getUserBlogs();
  };


  render() {
    const { handleSubmit } = this.props;
    return (
      <AddBlogContainer>
        <HeaderLarge> Add a new blog post </HeaderLarge>
        <FormSide onSubmit={handleSubmit(this.handleSubmit)}>
          <label> enter blog </label>
          <Field type="text" name="text" component={TextArea} />
          <button> Submit </button>
        </FormSide>

        <UserBlogs />

      </AddBlogContainer>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    createBlog: blogInfo => dispatch(thunks.createBlog(blogInfo)),
    getUserBlogs: () => dispatch(thunks.getUserBlogs()),
    toggleSearchBar: (status) => dispatch(normal.toggleSearchBar(status))

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
