import React, { Component } from "react";
import "./App.css";
import RegisterForm from './Compenents/FormRegister';
import Form from "./Compenents/Form";
import AddBlog from "./Compenents/AddBlog";
import ViewBlog from "./Compenents/ViewBlogs";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form /> */}
        {/* <AddBlog/> */}
        <RegisterForm/>

        {/* <ViewBlog/> */}

      </div>
    );
  }
}

export default App;
