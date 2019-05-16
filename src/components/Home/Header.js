import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="wrapper">
      <h1>{props.title}</h1>
      <button onClick={props.onAddItemButtonClick}>
        {props.addButtonText}
      </button>
    </header>
  );
}
