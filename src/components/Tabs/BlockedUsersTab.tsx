import React, { FC, ReactElement, useState } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Avatar from '@material-ui/core/Avatar/Avatar';
import blackDots from '../../assets/tabs/BlackDots.svg';
import unblock from '../../assets/tabs/Unblock.svg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
interface ILooserObject {
  address: string;
  city: string;
  id: number;
  postal_code: string;
  profile_picture: string;
  state: string;
  user: number;
}
interface BlockedUserTabProps {
  TabPanel: (props: TabPanelProps) => ReactElement;
  searchedBlockedUsersData: IResponceUser[];
  value: number;
  handleUnBlock: () => void;
  setUserId: (id: number | null) => void;
}

const BlockedUsersTab: FC<BlockedUserTabProps> = (props) => {
  const { TabPanel, searchedBlockedUsersData, value, handleUnBlock, setUserId } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>, id: number): void => {
    setAnchorEl(event.currentTarget);
    setUserId(id);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
    setUserId(null);
  };
  const unblockHandler = (): void => {
    handleClose();
    handleUnBlock();
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
        <MenuItem sx={{ color: '#32A071' }} onClick={unblockHandler}>
          <div className="option-div">
            <div>
              <img src={unblock} alt="" />
            </div>
            Unblock
          </div>
        </MenuItem>
      </Menu>
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
              {searchedBlockedUsersData?.map(
                (row: {
                  id: number;
                  name: string;
                  looser: { profile_picture: string | undefined };
                  email: string;
                }) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <div className="row">
                        <Avatar src={row?.looser?.profile_picture} />
                        <h3>{row.name}</h3>
                      </div>
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>Package 1</TableCell>
                    <TableCell>10%</TableCell>
                    <TableCell>
                      <img
                        src={blackDots}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(e) => {
                          handleClick(e, row.id);
                        }}
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

export default BlockedUsersTab;
