import React, { ReactElement } from 'react';
import Users from '../components/Users/Users';
import Home from '../pages/Users/Users';

// Types
interface BaseRoute {
  path: string;
  protected?: boolean;
  failureRedirect?: string;
  children?: Route[];
}

interface Element extends BaseRoute {
  element: ReactElement;
  navigate?: never;
}

interface Navigate extends BaseRoute {
  navigate: string;
  element?: never;
}

type Route = Element | Navigate;

// Routes
const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '*',
    navigate: '/',
  },
];

export default routes;
