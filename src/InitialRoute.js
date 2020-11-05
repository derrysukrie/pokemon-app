import React from 'react';
import { Route } from 'react-router-dom';

const InitialRooute = ({ initState, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...rest} {...props} />;
      }}
    />
  );
};

export default InitialRooute;
