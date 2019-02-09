import React, { Component } from "react";
import "./App.css";
import { GlobalStyle } from './styles/styles';
import { mainRoute } from "./routes/routes";


class App extends Component {

  render() {

    const value = mainRoute();

    return <div>

      <GlobalStyle />
      {value}</div>;
  }
}

export default App;
