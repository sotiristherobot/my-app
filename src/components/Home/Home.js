import React, { Component } from "react";

// components
import Header from "./Header";

class Home extends React.Component {
  state = {};

  componentDidMount() {
    console.log("component mounted");
  }

  render() {
    return (
      <div>
        <Header title={"Sotiris Home"} />
        <h1>Home</h1>;
      </div>
    );
  }
}
export default Home;
