import React from "react";
import { Redirect } from "react-router-dom";

export default function withAuth(Component) {
  return props => {
    const { state } = props.history.location;

    return state && state.authed ? (
      <Component {...props} />
    ) : (
      <Redirect to="/not-authorized" />
    );
  };
}
