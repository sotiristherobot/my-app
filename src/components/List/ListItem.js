import React from "react";
import './ListItem.css';
import {Box, Grommet, TextInput} from 'grommet';

export default function ListItem(props) {
  return (
    <Box direction="row" flex={true} gap="small" justify="stretch" margin="small">
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
    </Box>
  );
}
