import React, { Component } from "react";
import "../App.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as thunks from "../action/thunk/auth";
import renderField from "../components/Input";
import { callCheck } from "../routes/routes";
import { checkAuth } from "../utils/checkAuth";
import { Form, FormWrapper, HeaderLarge, SubmitButton } from "../styles/styles"

class FormRegister extends Component {
  constructor() {
    super();

  }


  componentDidMount() {
    callCheck();
    checkAuth()
  }




  handleSubmit = async data => {
    await this.props.registerUser(data);
  };


  render() {
    const { handleSubmit, submitting } = this.props;
    const { email, author, password, passwordConfirm } = this.props.errors;

    return (
      <FormWrapper className="Form">
        <HeaderLarge> Register Form </HeaderLarge>
        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field type="text" label="Email" name="email" component={renderField} />
          <span style={{ color: "red" }} > {email} </span>
          <Field type="author" label="Author" name="author" component={renderField} />
          <span style={{ color: "red" }}> {author}</span>
          <Field type="password" label="Password" name="password" component={renderField} />
          <span style={{ color: "red" }}> {password}</span>
          <Field type="password" label="confirm password" name="passwordConfirm" component={renderField} />
          <span style={{ color: "red" }}> {passwordConfirm}</span>

          <SubmitButton type="submit" disabled={submitting} />
        </Form>
      </FormWrapper>
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
