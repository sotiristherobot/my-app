import React, { Component } from "react";

// ui - imports
import {Box, Button, TextInput} from "grommet";
import { Login } from "grommet-icons"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onLoginButtonClick() {
    this.props.history.push('/', {authed: true})
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
                name="username"
                value="value"
            />
            <TextInput
                placeholder="Password"
                name="password"
                value="value"
            />
            <Button
                icon={<Login />}
                onClick={this.onLoginButtonClick.bind(this)}
                label={"Save"}
                alignSelf={"center"}
            />
          </Box>
        </Box>
    )
  }
}
export default LoginForm;
