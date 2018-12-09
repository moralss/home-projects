import React, { Component } from "react";
import "../App.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as thunks from "../action/thunk/auth";
import renderField from "../components/Input";
import { callCheck } from "../routes/routes";

class FormRegister extends Component {
  constructor() {
    super();

  }


  componentDidMount() {
    callCheck();
  }

  


  handleSubmit = async data => {
    await this.props.registerUser(data);
  };


  render() {
    const { handleSubmit, submitting } = this.props;
    const { email, author, password } = this.props.errors;

    return (
      <div className="Form">
        <h1> Register Form </h1>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field type="text" label="Email" name="email" component={renderField} />
          <span style={{ color: "red" }} > {email} </span>
          <Field type="password" label="Password" name="password" component={renderField} />
          <span style={{ color: "red" }}> {password}</span>
          <Field type="author" label="Author" name="author" component={renderField} />
          <span style={{ color: "red" }}> {author}</span>
          <input type="submit" disabled={submitting} />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (data) =>
      dispatch(thunks.registerUser(data))
  };
}


function mapStateToProps(state) {
  return { errors: state.errors.errors }
}


const registerUser = reduxForm({
  form: "registerUser"
})(FormRegister);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(registerUser);
