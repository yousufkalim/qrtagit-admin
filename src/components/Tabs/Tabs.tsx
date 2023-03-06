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
import request from '../../api/request';
import AllUsersTab from './AllUsersTab';
import BlockedUsersTab from './BlockedUsersTab';

import './tabs.css';
import Avatar from '@material-ui/core/Avatar/Avatar';
import blackDots from '../../assets/tabs/BlackDots.svg';
import searchIcon from '../../assets/tabs/Search.svg';
import { toast } from 'react-toastify';
import FlaggedUsersTab from './FlaggedUsersTab';

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

interface IBlockUserResponse {
  status: string;
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
  const [userId, setUserId] = useState<number | null>(null);
  const [blockedUsers, setBlockedUsers] = useState<IResponceUser[]>([]);
  const [flaggedUsers, setFlaggedUsers] = useState<IResponceUser[]>([]);
  const blocked = true;
  const flagged = true;
  const [value, setValue] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchedData, setSearchedData] = useState<IResponceUser[]>([]);
  const [searchedBlockedUsersData, setSearchedBlockedUsersData] = useState<IResponceUser[]>([]);
  const [searchedFlaggedUsersData, setSearchedFlaggedUsersData] = useState<IResponceUser[]>([]);

  const getUsers = (): void => {
    request<IResponceUser[]>('get', '/admin/users/')
      .then((res) => {
        setUsers(res);
        setSearchedData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getFlaggedUsers = (): void => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    request<IResponceUser[]>('get', `/admin/users/?is_flagged=${flagged}`)
      .then((res) => {
        setFlaggedUsers(res);
        setSearchedFlaggedUsersData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getBlockedUsers = (): void => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    request<IResponceUser[]>('get', `/admin/users/?is_blocked=${blocked}`)
      .then((res) => {
        setBlockedUsers(res);
        setSearchedBlockedUsersData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
    getBlockedUsers();
    getFlaggedUsers();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  const handleBlock = (): void => {
    if (userId) {
      request<IBlockUserResponse>('post', `/admin/users/${userId}/block/`)
        .then((res) => {
          toast.success(res?.status);
          getUsers();
          getBlockedUsers();
        })
        .catch((err) => {
          toast.error(err?.response?.data?.detail);
        });
    }
  };

  const handleUnBlock = (): void => {
    if (userId) {
      request<IBlockUserResponse>('post', `/admin/users/${userId}/unblock/`)
        .then((res) => {
          toast.success(res?.status);
          getBlockedUsers();
        })
        .catch((err) => {
          toast.error(err?.response?.data?.detail);
        });
    }
  };
  const handleFlag = (): void => {
    if (userId) {
      request<IBlockUserResponse>('post', `/admin/users/${userId}/flag/`)
        .then((res) => {
          toast.success(res?.status);
          getUsers();
          getFlaggedUsers();
        })
        .catch((err) => {
          toast.error(err?.response?.data?.detail);
        });
    }
  };

  const handleUnFlag = (): void => {
    if (userId) {
      request<IBlockUserResponse>('post', `/admin/users/${userId}/remove-flag/`)
        .then((res) => {
          toast.success(res?.status);
          getFlaggedUsers();
        })
        .catch((err) => {
          toast.error(err?.response?.data?.detail);
        });
    }
  };

  const handleSearch = (value: string): void => {
    if (value) {
      const filteredUsers = users.filter((person) =>
        person?.name?.toLowerCase().includes(value.toLowerCase()),
      );
      const filteredBlockedUsers = blockedUsers.filter((person) =>
        person?.name?.toLowerCase().includes(value.toLowerCase()),
      );
      const filteredFlaggedUsers = flaggedUsers.filter((person) =>
        person?.name?.toLowerCase().includes(value.toLowerCase()),
      );
      setSearchedData(filteredUsers);
      setSearchedBlockedUsersData(filteredBlockedUsers);
      setSearchedFlaggedUsersData(filteredFlaggedUsers);
      setSearchValue(value);
    } else {
      setSearchedData(users);
      setSearchedBlockedUsersData(blockedUsers);
      setSearchedFlaggedUsersData(flaggedUsers);
      setSearchValue(value);
    }
  };
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleSearch(e.target.value);
  };
  return (
    <Box sx={{ width: '100%' }}>
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
          <Tab className="tab_li" label={`All users (${users.length})`} {...a11yProps(0)} />
          <Tab className="tab_li" label="User type 1 (700)" {...a11yProps(1)} />
          <Tab className="tab_li" label="User type 2 (300)" {...a11yProps(2)} />
          <Tab
            className="tab_li"
            label={`Flagged users (${flaggedUsers.length})`}
            {...a11yProps(3)}
          />
          <Tab
            className="tab_li"
            label={`Blocked users (${blockedUsers.length})`}
            {...a11yProps(4)}
          />
        </Tabs>
        <div className="search-bar">
          <TextField
            className="input_field"
            name="search"
            onChange={handleSearchQuery}
            inputProps={{ sx: { marginLeft: '20px' } }}
            sx={{ width: '100%' }}
            type="Search"
            placeholder="Search User"
          />
          <img className="search-icon" src={searchIcon} alt="search" />
        </div>
      </Box>
      <AllUsersTab
        TabPanel={TabPanel}
        searchedData={searchedData}
        value={value}
        setUserId={setUserId}
        handleBlock={handleBlock}
        handleFlag={handleFlag}
      />
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
                  <TableCell>Package 1</TableCell>
                  <TableCell>10%</TableCell>
                  <TableCell>
                    <img style={{ cursor: 'pointer' }} src={blackDots} alt="" />
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
      <FlaggedUsersTab
        handleUnFlag={handleUnFlag}
        TabPanel={TabPanel}
        searchedFlaggedUsersData={searchedFlaggedUsersData}
        value={value}
        setUserId={setUserId}
      />
      <BlockedUsersTab
        TabPanel={TabPanel}
        searchedBlockedUsersData={searchedBlockedUsersData}
        value={value}
        handleUnBlock={handleUnBlock}
        setUserId={setUserId}
      />
    </Box>
  );
}
