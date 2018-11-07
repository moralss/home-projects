import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
  navbarLinks() {
    if (!this.props.authenticated) {
      return (
        this.createVisitorNav() 
      );
    } else {
      return (
       this.createPrivateNav() 
      );
    }
  }

  createPrivateNav(){
      return (
        <ul>
          <li key="secret">
            <Link to="/signin">sign in </Link>
          </li>
          <li key="signout">
            <Link to="/login">login </Link>
          </li>
        </ul>)
  }

  createVisitorNav() {
    return (
      <ul>
        <li>
          <Link to="/addblogs">add blogs</Link>
        </li>
        <li>
          <Link to="/signin">view blogs</Link>
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
