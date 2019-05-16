import React from "react";
import "./List.css";

// components
import ListItem from "./ListItem";

export default function List(props) {
  return (
    <div>
      {props.items.map(item => (
        <ListItem
          className="listWrapper"
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
