import React, { Component } from "react";
import "./App.css";
import AddBlog from "./container/AddBlog";
import ViewBlogs from "./container/ViewBlogs";
import FormRegister from "./container/FormRegister";
import LoginForm from "./container/LoginForm";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route
              exact
              path="/addblog"
              component={props => <AddBlog {...props} />}
            />

             <Route
              exact
              path="/formregister"
              component={props => <FormRegister {...props} />}
            />

            <Route
              exact
              path="/loginform"
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
