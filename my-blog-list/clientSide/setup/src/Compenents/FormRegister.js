import React, { Component } from "react";
import "../App.css";
import { reduxForm, Field } from "redux-form";
import {connect} from "react-redux"
import * as thunks from "../action/thunk";

class FormRegister extends Component {

  handleSubmit = (data) => {
    // console.log(data);
    //  this.props.submitToServer(data);
     this.props.submitToServer(data);
    
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="Form">
        <h1> Register Form </h1>

        <form onSubmit={handleSubmit(this.props.submitToServer)}>
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
    submitToServer: data => dispatch(thunks.submitToServer(data))
  };
}

const registerUser = reduxForm({
  form: "registerUser"
})(FormRegister);

export default connect(
  null,
  mapDispatchToProps,
)(registerUser);
