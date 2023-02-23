import React, { FC, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { baseUrl } from '../config';

interface IPrivateRoute {
  children: ReactNode;
}
const PrivateRoute: FC<IPrivateRoute> = ({ children }) => {
  const isLogin = localStorage.getItem('token');
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const validateLogin = async () => {
    axios
      .get(`${baseUrl}/auth`)
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .then(() => {})
      .catch((err) => {
        if (err?.request?.status === 403) {
          localStorage.removeItem('userData');
          localStorage.removeItem('token');
          navigate('/login');
        }
      });
  };
  useEffect(() => {
    void validateLogin();
  }, []);
  if (isLogin) {
    return <> {children}</>;
  }
  return <Navigate to="/login" />;
};
export default PrivateRoute;
