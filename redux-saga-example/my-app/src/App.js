import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  componentWillMount() {
    this.props.requestData();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1> Hello World </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state };
}

function mapDispatchToProps(dispatch) {
  return { requestData: () => dispatch(actions.requestData()) };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
