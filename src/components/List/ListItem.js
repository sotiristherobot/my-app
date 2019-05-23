import React, { Fragment } from "react";
import { Box, TextInput, Text, Button } from "grommet";
import { Save } from "grommet-icons/es6";

export default function ListItem(props) {
  return (
    <Box
      direction="row"
      flex={true}
      gap="small"
      align="center"
      justify="evenly"
      margin="small"
    >
      {props.editMode ? (
        <Fragment>
          <TextInput
            name="title"
            placeholder="title"
            value={props.title}
            onChange={e => props.onTextFieldInputChange(e, props.id)}
          />
          <TextInput
            name="content"
            placeholder="content"
            value={props.content}
            onChange={e => props.onTextFieldInputChange(e, props.id)}
          />
          <Button icon={<Save />} />
        </Fragment>
      ) : (
        <Fragment>
          <Text>{props.title}</Text>
          <Text>{props.content}</Text>
        </Fragment>
      )}
    </Box>
  );
}
