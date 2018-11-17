import React, { Component } from "react";
import "../App.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";

class FormRegister extends Component {
  constructor() {
    super();

    this.state = {
      isSuccess: false
    };
  }

  handleSubmit = async data => {
    await this.props.signInAction(data, this.props.history);
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(this.state.isSuccess);

    return (
      <div className="Form">
          <h1> Register Form </h1>
          <form onSubmit={handleSubmit(this.handleSubmit)}>
            <label> email </label>
            <Field type="text" name="email" component="input" />

            <label> password </label>
            <Field type="password" name="password" component="input" />

            <label> author </label>
            <Field type="author" name="author" component="input" />

            <input type="submit" />
          </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signInAction: (data, history) =>
      dispatch(thunks.signInAction(data, history))
  };
}

const registerUser = reduxForm({
  form: "registerUser"
})(FormRegister);

export default connect(
  null,
  mapDispatchToProps
)(registerUser);
