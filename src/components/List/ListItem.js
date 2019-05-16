import React from "react";

export default function ListItem(props) {
  return (
    <div>
      <input
        name="title"
        onChange={e => props.onTextFieldInputChange(e, props.id)}
        placeholder="title"
      />
      <input
        name="content"
        onChange={e => props.onTextFieldInputChange(e, props.id)}
        placeholder="content"
      />
    </div>
  );
}
