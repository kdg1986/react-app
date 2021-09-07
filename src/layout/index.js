import { makeStyles,createTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CssBaseline } from '@material-ui/core';

import json from '@/layout/menu';
import PageRoute from '@/pages';
import Loading from '@/components/atoms/loading';

import Header from '@/layout/header';
import Left from '@/layout/left';
import { useMemo } from 'react';

import Antd from '@/layout/Antd';
import { Route, Switch } from 'react-router';

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

export default () => {
  const classes = useStyles();  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');    
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const MaterialUI = () => {
    return(
      <>
      <ThemeProvider theme={theme}>
          <div className={classes.root}>              
              <CssBaseline />     
              <Header props={{ classes : classes }} />
              <Left props={{classes : classes,json : json}} />      
              <main className={classes.content}>
                  <div className={classes.toolbar} />
                  <PageRoute menu={json}/>
              </main>            
          </div>     
        </ThemeProvider>
        <Loading/>
      </>
    )
  }

  return (
    <>  
        <Route path="/material" component={MaterialUI}/>
        <Route path="/ant" component={Antd}/>
    </>
  );
}