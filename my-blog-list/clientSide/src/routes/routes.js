import React from "react";
import Navbar from "../container/Navbar";
import store from "../config/store";
import UserMenu from "../container/UserMenu";
import ViewBlogs from "../container/ViewBlogs";
import FormRegister from "../container/FormRegister";
import { Router, Route, Redirect } from "react-router-dom";
import { AUTHENTICATED } from "../actionTypes";
import LoginForm from "../container/LoginForm";
import EditBlog from "../container/EditBlog";
import history from "../history";
import AuthorBlogs from "../container/authorBlogs";
import HomePage from "../components/HomePage";
import AddComments from "../container/AddComments";
import ViewComments from "../container/ViewComments";

import jwtDecode from "jwt-decode";

// const historySync = syncHistoryWithStore(history, store)


const user = localStorage.getItem("user");

if (user) {
  store.dispatch({ type: AUTHENTICATED, payload: { auth: true } });
}


export const callCheck = async () => {
  // const check = await checkUser();
  // return check
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  let authenticated = store.getState().auth.authenticated;


  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? <Route {...rest} /> : <Redirect to="/signin" />
      }
    />
  );
};

export const mainRoute = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Navbar />

        <PrivateRoute
          exact
          path="/addblog"
          render={props => <UserMenu {...props} />}
        />


        <Route
          exact
          path="/"
          component={props => <HomePage {...props} />}
        />

        <Route
          exact
          path="/signin"
          component={props => <FormRegister {...props} />}
        />

        <Route
          exact
          path="/authorblogs/:id"
          component={props => <AuthorBlogs {...props} />}
        />

        <Route
          path="/login"
          component={props => <LoginForm {...props} />}
        />

        <PrivateRoute
          exact
          path="/editblog/:id"
          render={props => <EditBlog {...props} />}
        />

        <PrivateRoute
          exact
          path="/comments/:blogid"
          render={props => <AddComments {...props} />}
        />


        <PrivateRoute
          exact
          path="/viewcomments/:blogid"
          render={props => <ViewComments {...props} />}
        />



        <PrivateRoute
          exact
          path="/viewblogs"
          render={props => <ViewBlogs {...props} />}
        />
      </div>
    </Router>
  );
};
