import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer,AppBar,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItemIcon,ListItemText,Collapse,ListItem,Button,Backdrop,CircularProgress  } from '@material-ui/core';
import {ExpandLess,ExpandMore,StarBorder} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import json from '@/layout/menu';
import PageRoute from '@/layout/pageRoute';

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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const Header = ({props}) => {    
    const { classes,handleDrawerOpen,open,menuTitle } = props;
    
    return(
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
                {menuTitle}
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

const Left = ({props}) => {
    const theme = useTheme();    
    const {classes,open,handleDrawerClose,setTitle} = props;

    const _Item = ({props}) => {                
        const { name , path , icon } = props;
        const [_menu, menu] = React.useState(false);        
        return (
            <>
                <ListItem button>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <Link to={path} onClick={()=>{ setTitle({ title : name }) }}><ListItemText primary={name}  /></Link>
                    {props.subPage && (_menu ? <ExpandLess onClick={() => { menu(!_menu) }} /> : <ExpandMore onClick={() => { menu(!_menu) }} />)}
                </ListItem>
                {(props.subPage || []).map(
                    (obj,idx) => <Collapse in={_menu}  timeout="auto" unmountOnExit key={idx}>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested} >
                                    <ListItemIcon>{obj.icon}</ListItemIcon>
                                    <Link to={obj.path}><ListItemText primary={obj.name} /></Link>
                                    </ListItem>
                                </List>
                            </Collapse>
                )}
            </>
        )
    }

    return(
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
           {json.map((obj,index) =>(<_Item props={obj} key={index}/>)) }          
        </List>
        {/*<Divider /> */}
      </Drawer>
    )
    
}

export default () => {
  const classes = useStyles();  
  const [open, setOpen] = React.useState(true); //header
  const [header, setTitle] = React.useState({ title : "MAIN" });
  const [backDropState, setBackDrop] = React.useState(false);  

  

  const headerProps = {
    classes : classes,
    handleDrawerOpen : ()=>{ setOpen(!open); },    
    open : open,
    menuTitle : header.title
  }

  const leftProps = {
    classes : classes,    
    open : open,    
    handleDrawerClose : () => { setOpen(!open); },    
    setTitle : (obj) => { setTitle(obj) }
  }

  return (
    <>
        <div className={classes.root}>
            <CssBaseline />     
            <Header props={headerProps} />
            <Left props={leftProps} />      
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <PageRoute/>
            </main>
        </div>
        <Backdrop className={classes.backdrop} open={backDropState}>
        <CircularProgress color="inherit" />
        </Backdrop>
    </>
  );
}