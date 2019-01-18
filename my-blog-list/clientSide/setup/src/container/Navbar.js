import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import history from "../history";
import * as normal from "../action/normal-actions";
import * as thunks from "../action/thunk";
import { PrivatNavContainer, Button1, PublicNavContainer } from '../styles/styles';
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import ViewBlogs from "./ViewBlogs";


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

    let { pathname } = history.location;
    return (
      <div>

        <PrivatNavContainer>
          <li>
            <Profile />
          </li>

          <li>
            <a href="#">
              <NavLink to="/viewblogs">view blogs </NavLink>
            </a>
        {this.props.isToggleSearchBar ?  <SearchBar /> :null}

          </li>
          <li>
            <a href="#">
              <NavLink to="/addblog">add blogs </NavLink>
            </a>
          </li>

          <Button1 onClick={() => this.signOutUser()}>sign out </Button1>
        </PrivatNavContainer>
      </div>
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
    fetchUserProfile: () => dispatch(thunks.fetchUserProfile()),
    disableAuth:()=> dispatch(normal.disableAuth())

  };
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    isToggleSearchBar: state.ui.status
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);







