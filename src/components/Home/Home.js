import React, { Component } from "react";

// components
import Header from "./Header";
import List from "../List/List";

class Home extends React.Component {
  state = {
      items: [
          {id: '0', title: 'kostis', content: 'kostoulla'},
          {id: '1', title: 'gianoulla', content: 'giannis'}
      ]
  };

  constructor(props) {
    super(props);

    this.addItemButtonRef = React.createRef();
  }

  componentDidMount() {
    console.log("component mounted");
  }

  onAddItemButtonClick() {
     this.addItemButtonRef.current.disabled = true;
     this.setState((prevState, props) => (
         {
             items: [{id: '2', title: 'giorgoulla', content: 'giorgakis'}, ...prevState.items]
         }
    ));
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
