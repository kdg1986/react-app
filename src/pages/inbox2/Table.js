import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id,name, calories, fat, carbs, protein) {
  return {id,name, calories, fat, carbs, protein };
}

const rows = [
  createData("0",'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData("1",'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData("2",'Eclair', 262, 16.0, 24, 6.0),
  createData("3",'Cupcake', 305, 3.7, 67, 4.3),
  createData("4",'Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable({location, match}) {
  const classes = useStyles();
  
  const WarpTBody = props => {
    return (
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, snapshot) => (
          <tbody className={props.className} {...provided.droppableProps} ref={provided.innerRef}>
            {props.children}
            {provided.placeholder}
          </tbody>  
        )}
      </Droppable>
    )
  }

  const WarpRows = props => {
    return(
      <Draggable key={props.data.id} draggableId={props.data.id} index={props.index}>
        {(provided) => (
          <tr className={props.className} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
            {props.children}
          </tr>                  
        )}
      </Draggable>
    )
  }

  return (
    <DragDropContext>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody component={WarpTBody}>
              {rows.map( (row,idx) => (
                  <WarpRows component={WarpRows} data={row} index={idx}>
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </WarpRows>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </DragDropContext>
  );
}
