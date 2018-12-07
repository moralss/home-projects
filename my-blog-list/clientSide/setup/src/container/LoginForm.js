import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as thunks from "../action/thunk/auth";

class Login extends Component {

  handleSubmit = async data => {
    await this.props.verifyUser(data);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="Form">
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <label> email </label>
          <Field type="text" name="email" component="input" />

          <label> password </label>
          <Field type="password" name="password" component="input" />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    verifyUser: (data) =>
      dispatch(thunks.verifyUser(data))
  };
}


let loginConfig = reduxForm({
  form: "loginForm"
})(Login);

export default connect(
  null,
  mapDispatchToProps
)(loginConfig);
