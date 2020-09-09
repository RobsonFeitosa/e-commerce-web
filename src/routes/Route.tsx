import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReacDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface IRouteProps extends ReacDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { customer } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!customer ? (
          <Component />
        ) : (
          <>
            <Component />
            <Redirect
              to={{
                pathname: isPrivate ? '/signin' : '/',
              }}
            />
          </>
        );
      }}
    />
  );
};

export default Route;
