import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../Header/Header";

// Ui - Related
import { Box, Button } from "grommet";
import { Login } from "grommet-icons/es6";

export default function RouteNotAuthed() {
  return (
    <Box
      direction="column"
      flex={true}
      gap="small"
      justify="stretch"
      margin="small"
    >
      <Header title={"Sotiris Home"} />
      <Box
          direction="row"
          gap="small"
          margin="small"
          align="center"
      >
      <p>
        You are not authed to view this page, click to navigate to login screen
      </p>
      {/*login route is not implemented yet*/}
      <Link to={"/login"}>
        <Button icon={<Login />}/>
      </Link>
      </Box>
    </Box>
  );
}
