import { Avatar, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Subscriptions.css';
import editImg from '../../assets/Subscription/edit.svg';

const arrayIs = [
  { name: 'john', email: 'john@gmail.com' },
  { name: 'john1', email: 'john1@gmail.com' },
  { name: 'john2', email: 'john2@gmail.com' },
  { name: 'john3', email: 'john3@gmail.com' },
];
const Subscriptions: FC = () => {
  const [packages, setPackages] = useState<any>({
    packageDescription: '',
    freePeriod: '',
  });
  const [edit, setEdit] = useState(false);

  const handleEdit = (): void => {
    setEdit(true);
  };
  const handleSave = (): void => {
    setEdit(false);
    setPackages({ ...packages });
  };
  const handleInput = (e: any): void => {
    setPackages({ ...packages, [e.target.name]: e.target.value });
  };

  return (
    <div className="white-canvas">
      <div className="all-packages">
        {edit ? (
          <div className="package-box">
            <div className="header-div">Package 1</div>
            <div className="below-header">
              <div>
                <h2 className="heading">Package Description</h2>
                <TextField
                  name="packageDescription"
                  value={packages.packageDescription}
                  onChange={handleInput}
                  fullWidth
                />
              </div>
              <div>
                <h2 className="heading">Free period</h2>
                <TextField
                  name="freePeriod"
                  value={packages.freePeriod}
                  onChange={handleInput}
                  fullWidth
                  placeholder="2 months"
                />
              </div>
              <button onClick={handleSave} className="saveBtn">
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="package-box">
            <div className="header-div">
              Package 1
              <div>
                <img style={{ cursor: 'pointer' }} src={editImg} onClick={handleEdit} alt="" />
              </div>
            </div>
            <div className="below-header">
              <div>
                <h2 className="heading">Package Description</h2>
                <span className="description">{packages.packageDescription}</span>
              </div>
              <div className="divider"></div>
              <div>
                <h2 className="heading">Free period</h2>
                <span className="description">{packages.freePeriod}</span>
              </div>
            </div>
          </div>
        )}
        <div className="package-box">
          <div className="header-div">
            Package 2
            <div>
              <img src={editImg} alt="" />
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
              <img src={editImg} alt="" />
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
            {arrayIs.map((row) => (
              <TableRow key={row.email}>
                <TableCell>
                  <div className="row">
                    <Avatar alt={row.name} src="" />
                    <h3>{row.name}</h3>
                  </div>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Subscriptions;
