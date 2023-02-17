import React, { FC, useEffect } from 'react';
import './Users.css';
import Tabs from '../Tabs/Tabs';
import request from '../../api/request';
import User from '../../types/user';

interface IRequestUser {
  user: User;
}

const Users: FC = () => {
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = (): void => {
    request<IRequestUser>('get', '/admin/users/')
      .then((res) => {
        console.log('res', res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="white-canvas">
      <Tabs />
    </div>
  );
};
export default Users;
