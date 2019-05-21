import React from "react";
import { Box } from "grommet";

export default React.forwardRef((props, ref) => {
  return (
    <header>
      <Box
        direction="row"
        flex={true}
        gap="small"
        align="center"
        justify="evenly"
        margin="small"
      >
        <h1>{props.title}</h1>
        <div>
          <button
            disabled={props.disabled}
            ref={ref}
            onClick={props.onAddItemButtonClick}
          >
            {props.addButtonText}
          </button>
          <button
            disabled={props.disabled}
            ref={ref}
            onClick={props.onLoginButtonClick}
          >
            {props.loginButtonText}
          </button>
        </div>
      </Box>
    </header>
  );
});
