import React from "react";
import { Route, Redirect } from "react-router-dom";

const isLoggedIn = false;

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default ProtectedRoute;
