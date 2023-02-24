import React, { ReactElement } from 'react';
import SideBar from '../components/SideBar/SideBar';
import Users from '../components/Users/Users';
import Subscriptions from '../components/Subscriptions/Subscriptions';
import Feedback from '../components/Feedback/Feedback';
import Analytics from '../components/Analytics/Analytics';
import Percentage from '../components/Percentage/Percentage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../components/Login/Login';

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
    element: (
      <PrivateRoute>
        <SideBar>
          <Users />
        </SideBar>
      </PrivateRoute>
    ),
  },
  {
    path: '/users',
    element: (
      <PrivateRoute>
        <SideBar>
          <Users />
        </SideBar>
      </PrivateRoute>
    ),
  },
  {
    path: '/subscriptions',
    element: (
      <PrivateRoute>
        <SideBar>
          <Subscriptions />
        </SideBar>
      </PrivateRoute>
    ),
  },
  {
    path: '/feedback',
    element: (
      <PrivateRoute>
        <SideBar>
          <Feedback />
        </SideBar>
      </PrivateRoute>
    ),
  },
  {
    path: '/analytics',
    element: (
      <PrivateRoute>
        <SideBar>
          <Analytics />
        </SideBar>
      </PrivateRoute>
    ),
  },
  {
    path: '/percentage',
    element: (
      <PrivateRoute>
        <SideBar>
          <Percentage />
        </SideBar>
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '*',
    navigate: '/',
  },
];

export default routes;
