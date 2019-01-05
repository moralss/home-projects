import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { reduxForm, Field } from "redux-form";

class EditBlog extends Component {


  handleSubmit = (data)=> {
    const blogId = this.props.id;
    console.log(blogId);
    const blogInfo = { id: blogId, text: data.text };   
    console.log("blogInfo" , blogInfo);
    this.props.updateBlog(blogInfo);
  }



  componentDidMount() {
    this.loadClient(); // dispatch an action from your component
  }

  async loadClient() {
    // API call here
    const blogId = this.props.match.params.id;
    let res = await this.props.getEditBlog(Number(blogId));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="LatestBlog">
        <h1> edit Form </h1>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <label> enter blog </label>
          <Field type="text" name="text" value="name" component="input" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.user.editBlog.id,
    initialValues: {
      text: state.user.editBlog.text
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateBlog: (blogInfo) => dispatch(thunks.updateBlog(blogInfo)),
    getEditBlog: blogId => dispatch(thunks.getEditBlog(blogId))
  };
}

const EditFormConfig = reduxForm({
  form: "registerUser",
  enableReinitialize: true
})(EditBlog);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFormConfig);
