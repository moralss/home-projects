import React, { Component } from "react";
import "../App.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "col",
            justifyContent: "center",
            listStyle:"none"
          }}
        >
          <li style={{ margin: 5 }}>
            <Link to="/secret">login in</Link>
          </li>


          <li style={{ margin: 5 }}>
            <Link to="/signout">Sign in</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
