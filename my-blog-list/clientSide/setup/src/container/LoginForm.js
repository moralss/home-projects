import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as thunks from "../action/thunk";

class Login extends Component {

  handleSubmit = async data => {
    await this.props.loginInAction(data, this.props.history);
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
    loginInAction: (data, history) =>
      dispatch(thunks.loginInAction(data, history))
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     signInAction: (data, history) =>
//       dispatch(thunks.signInAction(data, history))
//   };
// }



let loginConfig = reduxForm({
  form: "loginForm"
})(Login);

export default connect(
  null,
  mapDispatchToProps
)(loginConfig);
