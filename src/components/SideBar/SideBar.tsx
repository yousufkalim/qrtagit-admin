import { FC } from 'react';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import Logo from '../../assets/sideBar/logo.svg';
import menu from '../../assets/sideBar/nav-menu.svg';
import user from '../../assets/sideBar/group.svg';
import subscriptions from '../../assets/sideBar/subscriptions.svg';
import feedback from '../../assets/sideBar/feedback.svg';
import analytics from '../../assets/sideBar/analytics.svg';
import percentage from '../../assets/sideBar/percentage.svg';
import logout from '../../assets/sideBar/logout.svg';
import notifications from '../../assets/sideBar/notifications.svg';
import downArrow from '../../assets/sideBar/arrowDown.svg';
import './SideBar.css';
import Users from '../Users/Users';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface SideBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<SideBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(3, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const buttonSX = {
  '&:hover': {
    borderLeft: '3px solid white',
  },
};

const SideBar: FC = (props: SideBarProps) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ background: 'white' }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <img src={menu} alt="menu" />
          </IconButton>
          <Toolbar
            sx={{
              padding: 'unset',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontSize="20px"
              fontWeight="500"
              color="#212121"
              variant="h6"
              noWrap
              component="div"
            >
              All Users
            </Typography>
            <Typography
              width="20%"
              fontSize="16px"
              fontWeight="500"
              display="flex"
              alignItems="center"
              color="#212121"
              noWrap
              justifyContent="flex-end"
              component="div"
            >
              <img src={notifications} alt="" />
              <div className="profile">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                Henry Mark
                <img src={downArrow} alt="down-arrow" />
              </div>
            </Typography>
          </Toolbar>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#0A3F74;',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img src={Logo} alt="logo" />
          <IconButton onClick={handleDrawerClose}>
            <img src={menu} alt="" />
          </IconButton>
        </DrawerHeader>
        <List
          sx={{
            marginBottom: 'auto',
            fontSize: '16px',
            fontWeight: '400',
            color: 'white',
            paddingTop: '20px',
          }}
        >
          {['Users', 'Subscriptions', 'Feedback', 'Analytics', 'Referral Discount'].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={buttonSX}>
                  <ListItemIcon sx={{ minWidth: '40px' }}>
                    <img
                      src={
                        index === 0
                          ? user
                          : index === 1
                          ? subscriptions
                          : index === 2
                          ? feedback
                          : index === 3
                          ? analytics
                          : percentage
                      }
                      alt=""
                    />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ),
          )}
        </List>
        <div className="divider"></div>
        <List
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'white',
            padding: '30px 0 20px 0',
          }}
        >
          {['Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={buttonSX}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <img src={logout} alt="logout" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          <Users />
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
};
export default SideBar;
