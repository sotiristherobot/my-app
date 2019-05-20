import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.css";

// components
import Header from "./Header";
import List from "../List/List";

class Home extends React.Component {
  state = {
    items: {
      itemId: 0, // keep track of created rows
      items: []
    },
    isAuthorized: true
  };

  constructor(props) {
    super(props);

    this.addItemButtonRef = React.createRef();
  }

  createItem() {
    this.setState(prevState => {
      let nextItemId = prevState.items.itemId + 1;
      return {
        items: {
          itemId: nextItemId,
          items: [
            ...prevState.items.items,
            {
              id: nextItemId,
              title: "title",
              content: "content"
            }
          ]
        }
      };
    });
  }

  onTextFieldInputChange(e, id) {
    const txtObjectIndex = this.state.items.items.findIndex(v => v.id === id);
    let newItemsState = this.state.items.items.slice(); // clone array to obtain a clone of the object

    newItemsState[txtObjectIndex] = {
      ...newItemsState[txtObjectIndex],
      [e.target.name]: e.target.value
    };

    this.setState(prevState => {
      return {
        items: {
          itemId: prevState.items.itemId,
          items: newItemsState
        }
      };
    });
  }

  onAddItemButtonClick() {
    // this.addItemButtonRef.current.disabled = true;
    this.createItem();
  }

  onLoginButtonClick() {
    console.log("loginbutton clicked");
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          ref={this.addItemButtonRef}
          disabled={false}
          title={"Sotiris Home"}
          addButtonText="Add item"
          loginButtonText="Login"
          onAddItemButtonClick={this.onAddItemButtonClick.bind(this)}
          onLoginButtonClick={this.onLoginButtonClick.bind(this)}
        />
        <List
          items={this.state.items}
          isAuthorized={this.state.isAuthorized}
          onTextFieldInputChange={this.onTextFieldInputChange.bind(this)}
        />
      </div>
    );
  }
}

// map state to props
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
