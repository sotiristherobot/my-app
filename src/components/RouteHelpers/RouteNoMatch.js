import React from 'react';
import {Link} from "react-router-dom";

// components
import Header from "../Header/Header";
import {Box} from "grommet/es6";

export default function RouteNoMatch() {
    return (
        <Box direction="column" flex={true} gap="small" justify="stretch" margin="small">
            <Header title={"Sotiris Home"}/>
            <p>No route for this</p>
            <Link to="/">back to home</Link>
        </Box>
    )
}