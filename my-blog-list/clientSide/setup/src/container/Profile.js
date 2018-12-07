import React, { Component } from "react";
import "../App.css";
import * as actions from "../action/thunk";

import { connect } from "react-redux";

class Profile extends Component {

  componentWillMount() {
    this.props.fetchUserProfile();
  }


  showProfile() {
    const { profile } = this.props;
    if (profile.length === 0) {
      return <div> Loading </div>;
    } else {
      return <span> {profile.name} </span>;
    }
  }

  render() {
    console.log("profile", this.props.profile);

    return (
      <div className="Profile">
        name
        {this.showProfile()}
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
