import React from "react";
import "./List.css";

// components
import ListItem from "./ListItem";

export default function List(props) {
  return props.items.items.length > 0 ? (
    props.items.items.map(item => (
      <ListItem
        className="listWrapper"
        key={item.id}
        id={item.id}
        title={item.title}
        content={item.content}
        onTextFieldInputChange={props.onTextFieldInputChange}
      />
    ))
  ) : (
    <p>Nothing to show yet</p>
  );
}
