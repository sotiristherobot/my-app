import React from "react";
import { Box, Button } from "grommet";
import { Add, Login } from "grommet-icons";

export default React.forwardRef((props, ref) => {
  return (
    <header>
      <Box
        direction="row"
        flex={true}
        gap="small"
        align="center"
        justify="between"
        margin="small"
      >
        <h1>{props.title}</h1>
        <Box direction="row" gap="small">
          <Button
            disabled={props.disabled}
            ref={ref}
            icon={<Add/>}
            onClick={props.onAddItemButtonClick}
            label={props.addButtonText}
          />
          <Button
            disabled={props.disabled}
            ref={ref}
            icon={<Login/>}
            onClick={props.onLoginButtonClick}
            label={props.loginButtonText}
          />
        </Box>
      </Box>
    </header>
  );
});
