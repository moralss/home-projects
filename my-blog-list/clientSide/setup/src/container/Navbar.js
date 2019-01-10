import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";
import * as actions from "../action/normal-actions";
import * as thunks from "../action/thunk";
import { Nav , Button1 } from '../styles/styles';
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
      <Nav>
        <li>
          <Profile />
        </li>
        <li>
          <a href="#">
            <Link to="/viewblogs">view blogs </Link>
          </a>

        </li>
        <li>
          <a href="#">
            <Link to="/addblog">add blogs </Link>
          </a>
        </li>

        <Button1 onClick={() => this.signOutUser()}>sign out </Button1>
      </Nav>
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







