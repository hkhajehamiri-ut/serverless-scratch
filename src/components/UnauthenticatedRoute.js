import React from 'react';
import { Router, Redirect, Route } from 'react-router-dom';

export default function UnauthenticatedRoute({ component: C, appProps, ...rest}) {
  return(
    <Route
    {...rest}
    render={props =>
    !appProps.isAuthenticated
    ? <C {...props} {...appProps} />
    : <Redirect to="/" /> }
    />
  );
}