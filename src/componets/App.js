import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
