import { Avatar } from '@mui/material';
import React, { FC, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Subscriptions.css';
import PackageBox from './PackageBox';
import { toast } from 'react-toastify';

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
  const [packages2, setPackages2] = useState<any>({
    packageDescription: '',
    freePeriod: '',
  });
  const [packages3, setPackages3] = useState<any>({
    packageDescription: '',
    freePeriod: '',
  });

  const [edit, setEdit] = useState<boolean>(false);
  const [edit2, setEdit2] = useState(false);
  const [edit3, setEdit3] = useState(false);

  const handleEdit = (): void => {
    setEdit(true);
  };
  const handleEdit2 = (): void => {
    setEdit2(true);
  };
  const handleEdit3 = (): void => {
    setEdit3(true);
  };

  const handleSave = (): void => {
    if (packages.packageDescription && packages.freePeriod) {
      setEdit(false);
      setPackages({ ...packages });
    } else toast.error('Fields cannot be empty');
  };

  const handleSave2 = (): void => {
    if (packages2.packageDescription && packages2.freePeriod) {
      setEdit2(false);
      setPackages2({ ...packages2 });
    } else toast.error('Fields cannot be empty');
  };

  const handleSave3 = (): void => {
    if (packages3.packageDescription && packages3.freePeriod) {
      setEdit3(false);
      setPackages3({ ...packages3 });
    } else toast.error('Fields cannot be empty');
  };

  const handleInput = (e: any): void => {
    setPackages({ ...packages, [e.target.name]: e.target.value });
  };
  const handleInput2 = (e: any): void => {
    setPackages2({ ...packages2, [e.target.name]: e.target.value });
  };
  const handleInput3 = (e: any): void => {
    setPackages3({ ...packages3, [e.target.name]: e.target.value });
  };

  return (
    <div className="white-canvas">
      <div className="all-packages">
        <PackageBox
          heading="Package 1"
          onChange={handleInput}
          handleSave={handleSave}
          handleEdit={handleEdit}
          packageDescription={packages.packageDescription}
          freePeriodDescription={packages.freePeriod}
          valueFreePeriod={packages.freePeriod}
          valuePackageDescription={packages.packageDescription}
          edit={edit}
        />
        <PackageBox
          heading="Package 2"
          onChange={handleInput2}
          handleSave={handleSave2}
          handleEdit={handleEdit2}
          packageDescription={packages2.packageDescription}
          freePeriodDescription={packages2.freePeriod}
          valueFreePeriod={packages2.freePeriod}
          valuePackageDescription={packages2.packageDescription}
          edit={edit2}
        />
        <PackageBox
          heading="Package 3"
          onChange={handleInput3}
          handleSave={handleSave3}
          handleEdit={handleEdit3}
          packageDescription={packages3.packageDescription}
          freePeriodDescription={packages3.freePeriod}
          valueFreePeriod={packages3.freePeriod}
          valuePackageDescription={packages3.packageDescription}
          edit={edit3}
        />
      </div>
      <div>
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
                <TableCell></TableCell>
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
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default Subscriptions;
