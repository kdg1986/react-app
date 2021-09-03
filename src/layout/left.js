import clsx from 'clsx';
import { Drawer,List,Divider,IconButton,ListItemIcon,ListItemText,Collapse,ListItem } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import {ExpandLess,ExpandMore} from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Left = ({props}) => {
    const theme = useTheme();    
    const {classes,json} = props;
    const store = useSelector(state => state.layoutReducer);
    const dispatch = useDispatch();

    const showMenu = () => dispatch({ type: 'layout/showMenu' });
    const setTitle = (name) => dispatch({ type : "layout/setTitle" , payload : name });
    const menuExpand = (path,isExpand) => dispatch({ type: 'layout/menuExpend', payload : { menu : `Expand_${path}`, state : isExpand } })    
    const Item = ({props}) => {                
        const { name , path , icon } = props;
        return (
            <>
                <ListItem button>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <Link to={path} onClick={() => setTitle(name)}><ListItemText primary={name}  /></Link>
                    {props.subPage && (store?.[`Expand_${path}`] ? <ExpandLess onClick={() => menuExpand(path,false)} /> : <ExpandMore onClick={() => menuExpand(path,true)} />)}
                </ListItem>
                {(props.subPage || []).map(
                    (obj,idx) => <Collapse in={store?.[`Expand_${path}`]}  timeout="auto" unmountOnExit key={idx}>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested} >
                                        <ListItemIcon>{obj.icon}</ListItemIcon>
                                        <Link to={obj.path} onClick={() => setTitle(obj.name)}><ListItemText primary={obj.name} /></Link>
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
          [classes.drawerOpen]: store.showMenu,
          [classes.drawerClose]: !store.showMenu,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: store.showMenu,
            [classes.drawerClose]: !store.showMenu,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={showMenu}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
           {json.map((obj,index) =>(<Item props={obj} key={index}/>)) }          
        </List>
        {/*<Divider /> */}
      </Drawer>
    )
    
}

export default Left;
