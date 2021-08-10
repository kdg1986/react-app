import React,{ Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
import { Route, Switch } from "react-router";


//page
import Inbox from '@/page/inbox';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();  
  const [open, setOpen] = React.useState(true);
  const [_inbox, inbox] = React.useState(false);
  const [_inbox2, inbox2] = React.useState(false);

  const handleClick = (menuName) => {
    menuName === "inbox" && inbox(!_inbox);
    menuName === "inbox2" && inbox2(!_inbox2);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['inbox'].map((text, index) => (
            <Fragment key={text}>
                <ListItem button>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <Link to="/inbox"> <ListItemText primary={text}  /> </Link>
                {_inbox ? <ExpandLess onClick={ () => { handleClick(text) } } /> : <ExpandMore onClick={ () => { handleClick(text) } } />}
                </ListItem>
                <Collapse in={_inbox}  timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested} >
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <Link to="/inbox/starred"> <ListItemText primary="Starred" /> </Link>
                    </ListItem>
                    </List>
                </Collapse>
            </Fragment>
          ))}
        </List>
        <Divider />       
        <List>
          {['inbox2'].map((text, index) => (
            <Fragment key={text}>
                <ListItem button onClick={ () => { handleClick(text) } }>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <Link to="/inbox2">
                     <ListItemText primary={text}  /> 
                </Link>
                {_inbox2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={_inbox2}  timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested} >
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred1" />
                    </ListItem>
                    </List>
                </Collapse>
            </Fragment>
          ))}
        </List>         
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Route exact path="/" render={()=>(<h3>Main</h3>)}/>
            <Switch>
                <Route path="/inbox" component={Inbox}/>
                <Route path="/inbox/:name" component={Inbox}/>
            </Switch>
      </main>
    </div>
  );
}
