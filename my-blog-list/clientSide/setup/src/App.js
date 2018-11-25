import React, { Component } from "react";
import "./App.css";
import { AUTHENTICATED } from "./actionTypes";
import store from "./config/store";
import { mainRoute } from "./routes";

const user = localStorage.getItem("user");

if (user) {
  store.dispatch({ type: AUTHENTICATED });
}

class App extends Component {

  render() {
    const value = mainRoute();

    return <div>{value}</div>;
  }
}

export default App;
