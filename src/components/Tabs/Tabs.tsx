import * as React from 'react';
import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import request from '../../api/request';

import './tabs.css';
import Avatar from '@material-ui/core/Avatar/Avatar';
import blackDots from '../../assets/tabs/BlackDots.svg';
import search from '../../assets/tabs/Search.svg';
import flag from '../../assets/tabs/Flag.svg';
import block from '../../assets/tabs/Block.svg';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface ILooserObject {
  address: string;
  city: string;
  id: number;
  postal_code: string;
  profile_picture: string;
  state: string;
  user: number;
}
interface IResponceUser {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  looser: ILooserObject;
  name: string;
  phone_number: string;
  user_type: string;
}

const arrayIs = [
  { name: 'john', email: 'john@gmail.com', pakage: 'Pakege 1', percentage: '10%', img: 'img' },
  { name: 'john1', email: 'john1@gmail.com', pakage: 'Pakege 1', percentage: '10%', img: 'img' },
  { name: 'john2', email: 'john2@gmail.com', pakage: 'Pakege 1', percentage: '10%', img: 'img' },
  { name: 'john3', email: 'john3@gmail.com', pakage: 'Pakege 1', percentage: '10%', img: 'img' },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function BasicTabs() {
  const [users, setUsers] = useState<IResponceUser[]>([]);

  useEffect(() => {
    request<IResponceUser[]>('get', '/admin/users/')
      .then((res) => {
        console.log(res, 'user');
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(users, 'userarray');
  const [value, setValue] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ color: '#212121' }} onClick={handleClose}>
          <div className="option-div">
            <div>
              <img src={flag} alt="flag" />
            </div>
            Flag
          </div>
        </MenuItem>
        <div className="divider"></div>
        <MenuItem sx={{ color: '#AF0909' }} onClick={handleClose}>
          <div className="option-div">
            <div>
              <img src={block} alt="flag" />
            </div>
            Block
          </div>
        </MenuItem>
      </Menu>
      <Box
        sx={{
          borderColor: 'divider',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Tabs
          sx={{ border: '1px solid #BCBCBC ', display: 'flex', borderRadius: '2.5px' }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="tab_li" label="All users (1k)" {...a11yProps(0)} />
          <Tab className="tab_li" label="User type 1 (700)" {...a11yProps(1)} />
          <Tab className="tab_li" label="User type 2 (300)" {...a11yProps(2)} />
          <Tab className="tab_li" label="Flagged users (20)" {...a11yProps(3)} />
          <Tab className="tab_li" label="Blocked users (15)" {...a11yProps(4)} />
        </Tabs>
        <div className="search-bar">
          <TextField
            className="input_field"
            sx={{ width: '100%' }}
            type="Search"
            placeholder="Search User"
          />
          <img className="search-icon" src={search} alt="search" />
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        <TableContainer component={Paper} sx={{ height: '80vh' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Subscription</TableCell>
                <TableCell>Referral Discount</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow key={row.email}>
                  <TableCell>
                    <div className="row">
                      <Avatar alt={row.name} src={row?.looser?.profile_picture} />
                      <h3>{row.name}</h3>
                    </div>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <img
                      style={{ cursor: 'pointer' }}
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      src={blackDots}
                      alt=""
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Subscription</TableCell>
                <TableCell>Referral Discount</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayIs.map((row) => (
                <TableRow key={row.email}>
                  <TableCell>
                    <div className="row">
                      <Avatar alt={row.name} src={row.img} />
                      <h3>{row.name}</h3>
                    </div>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <img src={blackDots} alt="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Subscription</TableCell>
                <TableCell>Referral Discount</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayIs.map((row) => (
                <TableRow key={row.email}>
                  <TableCell>
                    <div className="row">
                      <Avatar alt={row.name} src={row.img} />
                      <h3>{row.name}</h3>
                    </div>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.pakage}</TableCell>
                  <TableCell>{row.percentage}</TableCell>
                  <TableCell>
                    <img src={blackDots} alt="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Subscription</TableCell>
                <TableCell>Referral Discount</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayIs.map((row) => (
                <TableRow key={row.email}>
                  <TableCell>
                    <div className="row">
                      <Avatar alt={row.name} src={row.img} />
                      <h3>{row.name}</h3>
                    </div>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.pakage}</TableCell>
                  <TableCell>{row.percentage}</TableCell>
                  <TableCell>
                    <img src={blackDots} alt="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Subscription</TableCell>
                <TableCell>Referral Discount</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayIs.map((row) => (
                <TableRow key={row.email}>
                  <TableCell>
                    <div className="row">
                      <Avatar alt={row.name} src={row.img} />
                      <h3>{row.name}</h3>
                    </div>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.pakage}</TableCell>
                  <TableCell>{row.percentage}</TableCell>
                  <TableCell>
                    <img src={blackDots} alt="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}
