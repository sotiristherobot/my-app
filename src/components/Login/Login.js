import React, { Component } from "react";

// ui - imports
import {Box, Button, TextInput} from "grommet";
import {Login, Save} from "grommet-icons/es6";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Box
            direction="column"
            align="center"
            alignContent="center"
            fill={true}
        >
          <Box
              margin="large"
              direction="column"
              border="all"
              width="medium"
              pad="small"
              gap="small"
          >
            <TextInput
                placeholder="Username"
                value="value"
            />
            <TextInput
                placeholder="Password"
                value="value"
            />
            <Button
                icon={<Save />}
                // onClick={props.onItemSaveClick}
                label={"Save"}
                alignSelf={"center"}
            />
          </Box>
        </Box>
    )
  }
}
export default LoginForm;
