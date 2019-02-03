import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { reduxForm, Field } from "redux-form";
import TextArea from '../components/TextArea';
import { FormSide, AddBlogContainer, HeaderLarge } from "../styles/styles";


class EditBlog extends Component {


  handleSubmit = (data) => {
    const blogId = this.props.id;
    const blogInfo = { id: blogId, text: data.text };
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
        <AddBlogContainer style={{ paddingBottom: "0.1rem" }}>
          <HeaderLarge>edit Form  </HeaderLarge>
          <form onSubmit={handleSubmit(this.handleSubmit)}>
            <FormSide onSubmit={handleSubmit(this.handleSubmit)}>
              <label> enter blog </label>
              <Field type="text" name="text" component={TextArea} />
              <button> Submit </button>
            </FormSide>
          </form>
        </AddBlogContainer>
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
