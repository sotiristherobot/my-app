import React from "react";
import "./List.css";

// HOCs
import withAuth from "../HOCs/AuthHOC";

// components
import ListItem from "./ListItem";
import { Save } from "grommet-icons/es6";
import { Button, Box } from "grommet/es6";

// simple HOC that later needs to be moved to another file and reused
const withToDoEnhancements = Component => props =>
  !props.items.items.length > 0 ? (
    <p>Nothing to show</p>
  ) : (
    <Component {...props} />
  );

export default withToDoEnhancements(function List(props) {
  return (
    <Box>
      {props.editMode && (
        <Button
          icon={<Save />}
          onClick={props.onItemSaveClick}
          label={"Save"}
          alignSelf={"center"}
        />
      )}
      {props.items.items.map(item => (
        <ListItem
          className="listWrapper"
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          onTextFieldInputChange={props.onTextFieldInputChange}
          editMode={props.editMode}
        />
      ))}
    </Box>
  );
});
