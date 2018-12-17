import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";
import * as actions from "../action/normal-actions";


class Navbar extends Component {
  navbarLinks() {
    if (!this.props.authenticated) {
      return this.createVisitorNav();
    } else {
      return this.createPrivateNav();
    }
  }


  signOutUser() {
    localStorage.clear('user');
    history.push('/signin');
    this.props.disableAuth();
  }



  PrivateNav() {
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

  VisitorNav() {
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
    const { authenticated } = this.props;


    return <div>{authenticated ? this.PrivateNav() : this.VisitorNav()}</div>;
  }
}


function mapDispatchToProps(dispatch) {
  return {
    disableAuth: () => dispatch(actions.disableAuth())
  };
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);







