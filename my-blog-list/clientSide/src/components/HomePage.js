import React, { Component } from "react";
import "../App.css";
import {checkAuth} from "../utils/checkAuth";

class HomePage extends Component {

    componentWillMount(){
        checkAuth()
    }


  render() {
    return (
      <div className="Profile">
        Welcome to Sfiso app
        
      </div>
    );
  }
}


export default HomePage;
