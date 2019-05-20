import React from "react";
import './ListItem.css';

export default function ListItem(props) {
  return (
    <div className="listItemWrapper">
      <input
        name="title"
        className="listItem"
        onChange={e => props.onTextFieldInputChange(e, props.id)}
        placeholder="title"
        value={props.title}
      />
      <input
        name="content"
        className="listItem"
        onChange={e => props.onTextFieldInputChange(e, props.id)}
        placeholder="content"
        value={props.content}
      />
    </div>
  );
}
