import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


export default function IconLabelButtons(props) {

    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        }
      });

  return (
    <div>
      <Button
        variant={props.variant}
        color={props.color}   
        className={useStyles().root}     
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}
      >
        {props.children}
      </Button>      
    </div>
  );
}
