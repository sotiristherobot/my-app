import React, { Component } from "react";

// components
import Header from "./Header";

class Home extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.onAddItemButtonClick = this.onAddItemButtonClick.bind(this);
  }

  componentDidMount() {
    console.log("component mounted");
  }

  onAddItemButtonClick() {}

  render() {
    return (
      <div>
        <Header
          title={"Sotiris Home"}
          addButtonText={"Add item"}
          onAddItemButtonClick={this.onAddItemButtonClick}
        />
        <h1>Home</h1>;
      </div>
    );
  }
}
export default Home;
