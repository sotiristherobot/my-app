import React, { Fragment } from "react";
import { Box, TextInput, Text } from "grommet";

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
      {
        props.editMode?
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
            </Fragment>:
            <Fragment>
              <Text>{props.title}</Text>
              <Text>{props.content}</Text>
            </Fragment>
      }
    </Box>
  );
}
