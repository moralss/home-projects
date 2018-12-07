import React from "react";
import Navbar from "../container/Navbar";
import store from "../config/store";
import AddBlog from "../container/AddBlog";
import ViewBlogs from "../container/ViewBlogs";
import FormRegister from "../container/FormRegister";
import { Router, Route, Redirect } from "react-router-dom";
import { AUTHENTICATED } from "../actionTypes";
import LoginForm from "../container/LoginForm";
import EditBlog from "../container/EditBlog";
import history from "../history";

const user = localStorage.getItem("user");

if (user) {
  store.dispatch({ type: AUTHENTICATED });
}


const PrivateRoute = ({ component: Component, ...rest }) => {
  let authenticated = store.getState().auth.authenticated;
  console.log(authenticated);
  console.log(user);

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? <Route {...rest} /> : <Redirect to="/signin" />
      }
    />
  );
};

export const mainRoute = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Navbar />

        <Route
          exact
          path="/addblog"
          render={props => <AddBlog {...props} />}
        />

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
          path="/editblog/:id"
          component={props => <EditBlog {...props} />}
        />

        <Route
          exact
          path="/viewblogs"
          component={props => <ViewBlogs {...props} />}
        />
      </div>
    </Router>
  );
};
