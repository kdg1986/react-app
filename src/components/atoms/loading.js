import React from 'react';
import { Backdrop,CircularProgress  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({   
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
}));

const Loading = () => {
    const classes = useStyles();    
    const display = useSelector(state => state.loading.display);
    return(
        <>         
        <Backdrop className={classes.backdrop}  open={display}>
            <CircularProgress color="inherit" />
        </Backdrop>
        </>
    )
}
export default Loading;

/*
export default connect(
  (state) => ({
    display: state.loading.display
  }), 
  (dispatch) => ({
    loadingToggle: () => dispatch(loadingAction.loadingToggle()),    
  })  
)(Loading);
*/