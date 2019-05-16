import React, { Component } from "react";

// components
import Header from "./Header";

class Home extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.addItemButtonRef = React.createRef();
  }

  componentDidMount() {
    console.log("component mounted");
  }

  onAddItemButtonClick() {
     this.addItemButtonRef.current.disabled = true;
  }

  render() {
    return (
      <div>
        <Header
          ref={this.addItemButtonRef}
          disabled={false}
          title={"Sotiris Home"}
          addButtonText={"Add item"}
          onAddItemButtonClick={this.onAddItemButtonClick.bind(this)}
        />
        <h1>Home</h1>;
      </div>
    );
  }
}
export default Home;
