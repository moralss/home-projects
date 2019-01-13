import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import history from "../history";
import * as actions from "../action/normal-actions";
import * as thunks from "../action/thunk";
import { PrivatNavContainer, Button1, PublicNavContainer } from '../styles/styles';
import Profile from "./Profile";


class Navbar extends Component {

  // componentWillMount() {
  //   this.props.fetchUserProfile();
  // }



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
      <PrivatNavContainer>
        <li>
          <Profile />
        </li>
        <li>
          <a href="#">
            <NavLink to="/viewblogs">view blogs </NavLink>
          </a>

        </li>
        <li>
          <a href="#">
            <NavLink to="/addblog">add blogs </NavLink>
          </a>
        </li>

        <Button1 onClick={() => this.signOutUser()}>sign out </Button1>
      </PrivatNavContainer>
    );
  }

  VisitorNav() {
    return (
      <PublicNavContainer>
        <li>
          <a href="#">
            <Link to="/signin">sign in</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/login">login in </Link>
          </a>
        </li>
      </PublicNavContainer>
    );
  }

  render() {
    const { authenticated } = this.props;


    return <div>{authenticated ? this.PrivateNav() : this.VisitorNav()}</div>;
  }
}


function mapDispatchToProps(dispatch) {
  return {
    disableAuth: () => dispatch(actions.disableAuth()),
    fetchUserProfile: () => dispatch(thunks.fetchUserProfile())
  };
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);







