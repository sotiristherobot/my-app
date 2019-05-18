import React from "react";

export default function ListItem(props) {
  return (
    <div>
      <input
        name="title"
        onChange={e => props.onTextFieldInputChange(e, props.id)}
        placeholder="title"
        value={props.title}
      />
      <input
        name="content"
        onChange={e => props.onTextFieldInputChange(e, props.id)}
        placeholder="content"
        value={props.content}
      />
    </div>
  );
}
