import clsx from 'clsx';
import { AppBar,IconButton,Toolbar,Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';

const Header = ({props}) => {    
    const { classes } = props;    
    const store = useSelector(state => state.layoutReducer );
    const dispatch = useDispatch();
    return(
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: store.showMenu,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={ () => dispatch({ type: 'layout/showMenu' }) }
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: store.showMenu,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    {store.title}
                </Typography>
                
            </Toolbar>
        </AppBar>
    )
}

export default Header;