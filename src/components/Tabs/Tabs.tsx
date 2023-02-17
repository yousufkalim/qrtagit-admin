import * as React from 'react';
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

import './tabs.css';
import Avatar from '@material-ui/core/Avatar/Avatar';
import blackDots from '../../assets/tabs/BlackDots.svg';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
  const [value, setValue] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
          <Tab label="All users (1k)" {...a11yProps(0)} />
          <Tab label="User type 1 (700)" {...a11yProps(1)} />
          <Tab label="User type 2 (300)" {...a11yProps(2)} />
          <Tab label="Flagged users (20)" {...a11yProps(3)} />
          <Tab label="Blocked users (15)" {...a11yProps(4)} />
        </Tabs>
        <TextField sx={{ width: '25%' }} type="Search" placeholder="Search User" />
      </Box>
      <TabPanel value={value} index={0}>
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
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item five
      </TabPanel>
    </Box>
  );
}
