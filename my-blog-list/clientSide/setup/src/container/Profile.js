import React, { Component } from "react";
import "../App.css";
import * as actions from "../action/thunk";
import { ProfileContainer } from '../styles/styles';
import { connect } from "react-redux";

class Profile extends Component {

  componentWillMount() {
    this.props.fetchUserProfile();
    
  }


  render() {
    const { profile } = this.props;
    

    return (
      <ProfileContainer>
        <h3> USERNAME
        <span> {profile.name} </span>
        </h3>
      </ProfileContainer>
    );
  }
}

function mapStateToProps(state) {
  return { profile: state.user.profile };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserProfile: () => dispatch(actions.fetchUserProfile())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
