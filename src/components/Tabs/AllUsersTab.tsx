import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Avatar from '@material-ui/core/Avatar/Avatar';
import blackDots from '../../assets/tabs/BlackDots.svg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import flag from '../../assets/tabs/Flag.svg';
import block from '../../assets/tabs/Block.svg';

interface AllUserTabProps {
  TabPanel: any;
  users: any;
  value: any;
  setUserId: any;
  handleFlag: any;
  handleBlock: any;
}

const AllUsersTab: FC<AllUserTabProps> = (props) => {
  const { TabPanel, users, setUserId, value, handleFlag, handleBlock } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  console.log('Anchor ', anchorEl);

  console.log('Open ', open);

  const flagHandler = (): void => {
    handleClose();
    handleFlag();
  };
  const blockHandler = (): void => {
    handleClose();
    handleBlock();
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = (event: React.MouseEvent<HTMLImageElement>, id: number): void => {
    setAnchorEl(event.currentTarget);
    setUserId(id);
  };
  const handleClose = (): void => {
    console.log('Runs handle');
    setAnchorEl(null);
    setUserId(null);
  };

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ color: '#212121' }} onClick={flagHandler}>
          <div className="option-div">
            <div>
              <img src={flag} alt="flag" />
            </div>
            Flag
          </div>
        </MenuItem>
        <div className="divider"></div>
        <MenuItem sx={{ color: '#AF0909' }} onClick={blockHandler}>
          <div className="option-div">
            <div>
              <img src={block} alt="flag" />
            </div>
            Block
          </div>
        </MenuItem>
      </Menu>
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
              {users.map(
                (row: {
                  id: number;
                  name: string;
                  looser: { profile_picture: string | undefined };
                  email: string;
                }) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <div className="row">
                        <Avatar alt="" src={row?.looser?.profile_picture} />
                        <h3>{row.name}</h3>
                      </div>
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>Package 1</TableCell>
                    <TableCell>10%</TableCell>
                    <TableCell>
                      <img
                        style={{ cursor: 'pointer' }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(e) => {
                          handleClick(e, row.id);
                        }}
                        src={blackDots}
                        alt=""
                      />
                    </TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </>
  );
};

export default AllUsersTab;
