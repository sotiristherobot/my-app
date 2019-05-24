import React from "react";
import { Box, Button } from "grommet";
import { Add, Logout } from "grommet-icons";

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
            {
                //do not create the addItemButton if there is no handler for it.
                props.onAddItemButtonClick && <Button
                disabled={props.disabled}
                ref={ref}
                icon={<Add/>}
                onClick={props.onAddItemButtonClick}
                label={props.addButtonText}
                />
            }
            {
                //do not create the addItemButton if there is no handler for it.
                props.onLogoutButtonClick && <Button
                    disabled={props.disabled}
                    ref={ref}
                    icon={<Logout/>}
                    onClick={props.onLogoutButtonClick}
                    label={props.logoutButtonText}
                />
            }
        </Box>
      </Box>
    </header>
  );
});
