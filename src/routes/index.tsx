import React, { ReactElement } from 'react';
import SideBar from '../components/SideBar/SideBar';
import Users from '../Pages/Home';
import Subscriptions from '../Pages/Subscriptions';
import Feedback from '../Pages/Feedback';
import Analytics from '../Pages/Analytics';
import Percentage from '../Pages/Percentage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../Pages/Login';

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
