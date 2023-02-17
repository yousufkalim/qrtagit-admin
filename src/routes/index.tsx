import React, { ReactElement } from 'react';
import SideBar from '../components/SideBar/SideBar';
import Users from '../components/Users/Users';
import Subscriptions from '../components/Subscriptions/Subscriptions';
import Feedback from '../components/Feedback/Feedback';
import Analytics from '../components/Analytice/Analytics';
import Percentage from '../components/Percentage/Percentage';
// import PrivateRoute from './PrivateRoute';
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
      <PublicRoute>
        <SideBar>
          <Users />
        </SideBar>
      </PublicRoute>
    ),
  },
  {
    path: '/users',
    element: (
      <PublicRoute>
        <SideBar>
          <Users />
        </SideBar>
      </PublicRoute>
    ),
  },
  {
    path: '/subscriptions',
    element: (
      <PublicRoute>
        <SideBar>
          <Subscriptions />
        </SideBar>
      </PublicRoute>
    ),
  },
  {
    path: '/feedback',
    element: (
      <PublicRoute>
        <SideBar>
          <Feedback />
        </SideBar>
      </PublicRoute>
    ),
  },
  {
    path: '/analytics',
    element: (
      <PublicRoute>
        <SideBar>
          <Analytics />
        </SideBar>
      </PublicRoute>
    ),
  },
  {
    path: '/percentage',
    element: (
      <PublicRoute>
        <SideBar>
          <Percentage />
        </SideBar>
      </PublicRoute>
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
