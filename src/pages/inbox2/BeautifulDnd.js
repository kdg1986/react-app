import React,{ useCallback,useState } from 'react';
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';
import "@STYLE/potal.scss"; 
import withComponentSplitting from '@/components/withComponentSplitting';
//import Lion1 from '@/images/Lion1.jpg';

const Drag = props => {  
  return(
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
      {(provided) => (
        <div className={props.className}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {props.Compnent && <props.Compnent/>}
        </div>                  
      )}                
    </Draggable>
  )
}

const Drop = props => {  
  return(
    <Droppable droppableId="droppable-1" type="PERSON">
      {(provided, snapshot) => (
        <div className="wrap"
        {...provided.droppableProps} ref={provided.innerRef}
        >
            {props.todos.map(( item, index) => <Drag {...item} index={index} key={index} />)}
            {provided.placeholder}
        </div>
      )}
    </Droppable>  
  )
}

const App = () => {
  
  const [todos,setTodos] = useState([
    { id: "0", title: "A", className : "drag d1", Compnent : withComponentSplitting( () => import('../inbox/inboxGrid') ) },
    { id: "1", title: "B", className : "drag d2", Compnent : withComponentSplitting( () => import('../inbox2/Table') ) },
    { id: "2", title: "C", className : "drag d3", Compnent : withComponentSplitting( () => import('../inbox2/Table') ) },
    { id: "3", title: "D", className : "drag d4"},
  ]);

  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    //console.log('onBeforeCapture',todos)
    /*...*/
  }, [todos]);
  const onBeforeDragStart = useCallback(() => {
    //console.log('onBeforeDragStart',todos)
    /*...*/
  }, [todos]);
  const onDragStart = useCallback(() => {
    //console.log('onDragStart',todos)
    /*...*/
  }, [todos]);
  const onDragUpdate = useCallback(() => {
    //console.log('onDragUpdate',todos)
    /*...*/
  }, [todos]);
  const onDragEnd = useCallback((args) => {
    const _todos = todos.slice(0);
    const dragble = _todos.splice(args.source.index,1);
    _todos.splice(args.destination.index,0,dragble[0])
    setTodos(_todos)
  }, [todos]);

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Drop todos={todos}/>

    </DragDropContext>
  );
}



export {
  App
}