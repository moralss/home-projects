import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as thunks from "../action/thunk/auth";
import { checkAuth } from "../utils/checkAuth";
import { Form, FormWrapper, SubmitButton, HeaderLarge } from "../styles/styles";
import renderField from "../components/Input";

class Login extends Component {

  componentDidMount() {
    checkAuth()
  }

  handleSubmit = async data => {
    await this.props.verifyUser(data);
  };

  render() {
    const { handleSubmit } = this.props;
    let { email, password } = this.props.errors;

    return (
      <FormWrapper className="Form">

        <HeaderLarge> Login</HeaderLarge>
        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field type="text" label="email" name="email" component={renderField} />
          <span style={{ color: "red" }}> {email}</span>
          <Field type="password" label="password" name="password" component={renderField} />
          <span style={{ color: "red" }}> {password}</span>
          <SubmitButton type="submit" />
        </Form>
      </FormWrapper>
    );
  }
}


function mapStateToProps(state) {
  return { errors: state.errors.errors }
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
  mapStateToProps,
  mapDispatchToProps
)(loginConfig);
