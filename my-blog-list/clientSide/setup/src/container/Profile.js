import React, { Component } from "react";
import "../App.css";
import * as actions from "../action/thunk";

import { connect } from "react-redux";

class Profile extends Component {

  componentWillMount() {
    this.props.fetchUserProfile();
  }




  render() {
    const { profile } = this.props;

    return (
      <div className="Profile">
        name
        <span> {profile.name} </span>
      </div>
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
