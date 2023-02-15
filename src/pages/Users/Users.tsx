import React, { FC } from 'react';
import SideMenu from '../../components/SideBar/SideBar';
import Users from '../../components/Users/Users';

const SideBar: FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />
      <Users />
    </div>
  );
};

export default SideBar;
