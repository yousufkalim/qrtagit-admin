/* eslint-disable no-unneeded-ternary */
import { Avatar } from '@mui/material';
import React, { FC, useState, useEffect, useCallback } from 'react';
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
import request from '../../api/request';

const arrayIs = [
  { name: 'john', email: 'john@gmail.com' },
  { name: 'john1', email: 'john1@gmail.com' },
  { name: 'john2', email: 'john2@gmail.com' },
  { name: 'john3', email: 'john3@gmail.com' },
];

interface IPlanObject {
  name: string;
  description: string;
  free_period: string;
  id: number;
}

const Subscriptions: FC = () => {
  const [packages, setPackages] = useState<IPlanObject>({
    name: 'Package 1',
    description: '',
    free_period: '',
    id: 1,
  });
  const [packages2, setPackages2] = useState<IPlanObject>({
    name: 'Package 2',
    description: '',
    free_period: '',
    id: 2,
  });
  const [packages3, setPackages3] = useState<IPlanObject>({
    name: 'Package 3',
    description: '',
    free_period: '',
    id: 3,
  });
  const [edit, setEdit] = useState<boolean>(false);
  const [edit2, setEdit2] = useState<boolean>(false);
  const [edit3, setEdit3] = useState<boolean>(false);

  const [newPackage1, setNewPackage1] = useState<boolean>(true);
  const [newPackage2, setNewPackage2] = useState<boolean>(true);
  const [newPackage3, setNewPackage3] = useState<boolean>(true);

  useEffect(() => {
    getAllPackages();
  }, []);

  const getAllPackages = (): void => {
    request<IPlanObject[]>('get', '/admin/subscription-plans/')
      .then((res) => {
        if (res.length > 0) {
          const result = res.find((item) => item.name === packages?.name) ?? packages;
          const result2 = res.find((item) => item?.name === packages2?.name) ?? packages2;
          const result3 = res.find((item) => item?.name === packages3?.name) ?? packages3;

          setNewPackage1(result.description === '' && result.free_period === '');
          setNewPackage2(result2.description === '' && result2.free_period === '');
          setNewPackage3(result3.description === '' && result3.free_period === '');

          setPackages(result);
          setPackages2(result2);
          setPackages3(result3);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log('🚀 ~ file: Subscriptions.tsx:51 ~ newPackage1:', newPackage1);
  console.log('🚀 ~ file: Subscriptions.tsx:51 ~ newPackage2:', newPackage2);
  console.log('🚀 ~ file: Subscriptions.tsx:51 ~ newPackage3:', newPackage3);

  const handleEdit = useCallback((): void => {
    setEdit(true);
  }, [setEdit]);
  const handleEdit2 = useCallback((): void => {
    setEdit2(true);
  }, [setEdit2]);
  const handleEdit3 = useCallback((): void => {
    setEdit3(true);
  }, [setEdit3]);

  const handleSave = useCallback(
    (pkg: IPlanObject): void => {
      const data = {
        name: pkg.name,
        description: pkg.description,
        free_period: pkg.free_period,
        id: pkg.id,
      };
      if (packages.description && packages.free_period) {
        request<IPlanObject>('post', '/admin/subscription-plans/', data)
          .then((res) => {
            toast.success('Package Saved');
            getAllPackages();
            pkg.name === 'Package 1'
              ? setEdit(false)
              : pkg.name === 'Package 2'
              ? setEdit2(false)
              : pkg.name === 'Package 3' && setEdit3(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        toast.error('Fields cannot be empty');
      }
    },
    [packages],
  );

  const handleSaveEdit = useCallback(
    (pkg: IPlanObject): void => {
      const data = {
        name: pkg.name,
        description: pkg.description,
        free_period: pkg.free_period,
        id: pkg.id,
      };
      if (pkg.description && pkg.free_period) {
        request<IPlanObject>('put', `/admin/subscription-plans/${pkg.id}/`, data)
          .then((res) => {
            console.log(res);
            toast.success('Edited Successfully');
            getAllPackages();
            pkg.name === 'Package 1'
              ? setEdit(false)
              : pkg.name === 'Package 2'
              ? setEdit2(false)
              : pkg.name === 'Package 3' && setEdit3(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        toast.error('Fields cannot be empty');
      }
    },
    [packages],
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPackages({ ...packages, [e.target.name]: e.target.value });
    },
    [packages],
  );

  const handleInput2 = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPackages2({ ...packages2, [e.target.name]: e.target.value });
    },
    [packages2],
  );
  const handleInput3 = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPackages3({ ...packages3, [e.target.name]: e.target.value });
    },
    [packages3],
  );

  console.log('Package ', packages);
  return (
    <div className="white-canvas">
      <div className="all-packages">
        <PackageBox
          pkg={packages}
          onChange={handleInput}
          handleSave={handleSave}
          handleSaveEdit={handleSaveEdit}
          handleEdit={handleEdit}
          edit={edit}
          isNew={newPackage1}
        />
        <PackageBox
          pkg={packages2}
          onChange={handleInput2}
          handleSave={handleSave}
          handleEdit={handleEdit2}
          handleSaveEdit={handleSaveEdit}
          edit={edit2}
          isNew={newPackage2}
        />
        <PackageBox
          pkg={packages3}
          onChange={handleInput3}
          handleSave={handleSave}
          handleEdit={handleEdit3}
          handleSaveEdit={handleSaveEdit}
          edit={edit3}
          isNew={newPackage3}
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
