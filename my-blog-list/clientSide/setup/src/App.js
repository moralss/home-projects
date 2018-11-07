import React, { Component } from "react";
import "./App.css";
import AddBlog from "./container/AddBlog";
import ViewBlogs from "./container/ViewBlogs";
import FormRegister from "./container/FormRegister";
import RequireAuth from "./container/higerOrder.j/RequireAuth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AUTHENTICATED } from "./action/thunk";
import store from "./config/store";
import Navbar from "./container/Navbar";
import LoginForm from "./container/LoginForm";

const user = localStorage.getItem("user");

if (user) {
  store.dispatch({ type: AUTHENTICATED });
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/addblog" 
            component={RequireAuth(AddBlog)} />

            <Route
              exact
              path="/signin"
              component={props => <FormRegister {...props} />}
            />

            <Route
              exact
              path="/login"
              component={props => <LoginForm {...props} />}
            />

            <Route
              exact
              path="/viewblogs"
              component={props => <ViewBlogs {...props} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
