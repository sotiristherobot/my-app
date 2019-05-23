import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

// components
import Header from "../Header/Header";
import List from "../List/List";
import {Box} from "grommet/es6";

class Home extends React.Component {
  state = {
    items: {
      itemId: 0, // keep track of created rows
      items: []
    },
    isAuthorized: true,
    editMode: false
  };

  constructor(props) {
    super(props);

    this.addItemButtonRef = React.createRef();
  }

  /**
   * Creates a new item, and sets it to the state. This function will be transformed to use Redux's store
   * instead.
   */
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
        },
        editMode: !prevState.editMode //TODO this needs to change and be based on when the button add is clicked
      };
    });
  }

  /**
   * When input on textfield changes, sets the state with the new values.
   * @param {event} e - The on change event from textfield
   * @param {number} id - The id of the textfield. We use this to find which textfield has changed.
   */
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

  /**
   * OnClick handler for the add new item button. It calls createItem which creates a new item
   * in the local state.
   */
  onAddItemButtonClick() {
    this.addItemButtonRef.current.disabled = true;
    this.createItem();
  }

  onLoginButtonClick() {
    console.log("loginbutton clicked");
  }

  render() {
    return (
      <Box direction="column" flex={true} gap="small" justify="stretch" margin="small">
        <Header
          ref={this.addItemButtonRef}
          disabled={this.state.editMode}
          title={"Sotiris Home"}
          addButtonText="add"
          loginButtonText="login"
          onAddItemButtonClick={this.onAddItemButtonClick.bind(this)}
          onLoginButtonClick={this.onLoginButtonClick.bind(this)}
        />
        <List
          items={this.state.items}
          isAuthorized={this.state.isAuthorized}
          editMode={this.state.editMode}
          onTextFieldInputChange={this.onTextFieldInputChange.bind(this)}
        />
      </Box>
    );
  }
}

// map state to props
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Home);
