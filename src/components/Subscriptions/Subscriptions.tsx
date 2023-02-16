import { Avatar, TextField } from '@mui/material';
import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Subscriptions.css';
import edit from '../../assets/Subscription/edit.svg';
const Subscriptions: FC = () => {
  return (
    <div className="white-canvas">
      <div className="all-packages">
        <div className="package-box">
          <div className="header-div">Package 1</div>
          <div className="below-header">
            <div>
              <h2 className="heading">Package Description</h2>
              <TextField fullWidth />
            </div>
            <div>
              <h2 className="heading">Free period</h2>
              <TextField fullWidth placeholder="2 months" />
            </div>
            <button className="saveBtn">Save</button>
          </div>
        </div>
        <div className="package-box">
          <div className="header-div">
            Package 2
            <div>
              <img src={edit} alt="" />
            </div>
          </div>
          <div className="below-header">
            <div>
              <h2 className="heading">Package Description</h2>
              <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis.
              </span>
            </div>
            <div className="divider"></div>
            <div>
              <h2 className="heading">Free period</h2>
              <span className="description">3 months</span>
            </div>
          </div>
        </div>
        <div className="package-box">
          <div className="header-div">
            Package 3
            <div>
              <img src={edit} alt="" />
            </div>
          </div>
          <div className="below-header">
            <div>
              <h2 className="heading">Package Description</h2>
              <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis.
              </span>
            </div>
            <div className="divider"></div>
            <div>
              <h2 className="heading">Free period</h2>
              <span className="description">4 months</span>
            </div>
          </div>
        </div>
      </div>
      <div className="total-users">
        <span>Package 1</span>
        <div className="grey-circle"></div>
        <span>100 users</span>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="row">
                  <Avatar alt="Henry Mark" src="/static/images/avatar/1.jpg" />
                  <h3>Jogn Doe</h3>
                </div>
              </TableCell>
              <TableCell>johndoe@email.com</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Subscriptions;
