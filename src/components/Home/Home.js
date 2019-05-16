import React, { Component } from "react";

// components
import Header from "./Header";
import List from "../List/List";

class Home extends React.Component {
  state = {
      items: []
  };

  constructor(props) {
    super(props);

    this.addItemButtonRef = React.createRef();
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
        <List items={this.state.items}/>
      </div>
    );
  }
}
export default Home;
