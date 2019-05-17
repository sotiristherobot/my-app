import React from "react";
import { Redirect } from "react-router-dom";

export default function withAuth(Component) {
    return props => {
        return !props.isAuthorized
            ? <Redirect to="/not-authorized"/>
            : <Component {...props}/>
    }
}