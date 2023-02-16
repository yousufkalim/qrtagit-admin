import React, { ReactElement } from 'react';
import Subscriptions from '../pages/Subscriptions/Subscriptions';
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
    path: '/subscriptions',
    element: <Subscriptions />,
  },
  {
    path: '*',
    navigate: '/',
  },
];

export default routes;
