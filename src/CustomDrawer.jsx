import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PhoneIcon from '@material-ui/icons/Phone';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PaymentIcon from '@material-ui/icons/Payment';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      paddingLeft: 16,
      marginRight: 16,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,  
      marginLeft: 160,    
      width: `calc(100% - ${drawerWidth + 16}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 100,

    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      background: theme.palette.drawer.main,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',

    },
    fixedHeight: {
      height: 240,
    },
  }));

const CustomDrawer = (props) => {

    const { history, title, drawerState, handleDrawerClose, handleDrawerOpen, open, homeDisabled, room1Disabled, room2Disabled, room3Disabled, room4Disabled, pricingDisabled, contactDisabled } = props;
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (

        <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {title}
          </Typography>

        </Toolbar>
      </AppBar>

      <Drawer
            variant="permanent"
            classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}

            // "#87ceeb"
        >
            <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>

            <Divider />
        <List>

        <ListItem button disabled={homeDisabled} onClick = {() => history.push('/')}>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItem>

        {/* <ListItem button onClick = {() => history.push('/Room1')}> */}
        <ListItem button disabled={room1Disabled} onClick = {() => history.push('/Room1')}>
            <ListItemIcon>
            <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary="Room 1" />
        </ListItem>

        <ListItem button disabled={room2Disabled} onClick = {() => history.push('/Room2')}>
            <ListItemIcon>
            <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary="Room 2" />
        </ListItem>

        <ListItem button disabled={room3Disabled} onClick = {() => history.push('/Room3')}>
            <ListItemIcon>
            <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary="Room 3" />
        </ListItem>

        <ListItem button disabled={room4Disabled} onClick = {() => history.push('/Room4')}>
            <ListItemIcon>
            <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary="Room 4" />
        </ListItem>

        <ListItem button disabled={pricingDisabled} onClick = {() => history.push('/Pricing')}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Pricing" />
        </ListItem>

        <ListItem button disabled={contactDisabled} onClick = {() => history.push('/Contact')}>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
        </ListItem>

        </List>

        </Drawer>

    </div>

    )
};

export default CustomDrawer;
