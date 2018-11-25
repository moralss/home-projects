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

  renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
  }) => {
    return (
      <div>
        <label> {label}</label>
        <div>
          <input {...input} type={type} placeholder={label} />
          {touched && error && <span>{this.props.errors.email}</span>}
        </div>
      </div>
    )
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    const { email, author, password } = this.props.errors;

    return (
      <div className="Form">
        <h1> Register Form </h1>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field type="text" label="Email" name="email" component={this.renderField} />
          <span style={{ color: "red" }} > {email} </span>
          <Field type="password" label="Password" name="password" component={this.renderField} />
          <span style={{ color: "red" }}> {password}</span>
          <Field type="author" label="Author" name="author" component={this.renderField} />
          <span style={{ color: "red" }}> {author}</span>
          <input type="submit" disabled={submitting} />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signInAction: (data, history) =>
      dispatch(thunks.signInAction(data, history)),
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
