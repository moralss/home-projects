import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";

class Navbar extends Component {
  navbarLinks() {
    if (!this.props.authenticated) {
      return this.createVisitorNav();
    } else {
      return this.createPrivateNav();
    }
  }

  signOutUser(){
    localStorage.clear('user');
    history.push('/signin');
  }

  createPrivateNav() {
    return (
      <ul>
        <li>
          <button onClick={() => this.signOutUser()}>sign out </button>
        </li>
        <li>
          <Link to="/viewblogs">view blogs </Link>
        </li>
        <li>
          <Link to="/addblog">add blogs </Link>
        </li>
      </ul>
    );
  }

  createVisitorNav() {
    return (
      <ul>
        <li>
          <Link to="/signin">sign in</Link>
        </li>
        <li>
          <Link to="/login">login in </Link>
        </li>
      </ul>
    );
  }

  render() {
    console.log("authenticated", this.props.authenticated);
    return <div>{this.navbarLinks()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Navbar);
