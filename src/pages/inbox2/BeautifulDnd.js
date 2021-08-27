import React,{ useCallback,useState,useEffect } from 'react';
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';
import "@STYLE/potal.scss"; 
import withComponentSplitting from '@/components/withComponentSplitting';
import { useDispatch, useSelector } from 'react-redux';


//dotted #222

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
  const [positon,setPosition] = useState(false);  
  const store = useSelector(state => state.layoutReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    !store.potalPosition.length && dispatch({ type: 'layout/portal', payload : [
      { id: "0", title: "A", className : "drag d1", Compnent : withComponentSplitting( () => import('../inbox/inboxGrid') ) },
      { id: "1", title: "B", className : "drag d2", Compnent : withComponentSplitting( () => import('../inbox2/Table') ) },
      { id: "2", title: "C", className : "drag d3", Compnent : withComponentSplitting( () => import('../inbox2/Table') ) },
      { id: "3", title: "D", className : "drag d4"},
      { id: "4", title: "D", className : "drag d5"},
      { id: "5", title: "D", className : "drag d6"},
      { id: "6", title: "D", className : "drag d7"},
    ] })
  }, []);

  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    //console.log('onBeforeCapture',todos)
    /*...*/
  }, [store.potalPosition]);
  const onBeforeDragStart = useCallback(() => {
    //console.log('onBeforeDragStart',todos)
    /*...*/
  }, [store.potalPosition]);
  const onDragStart = useCallback(() => {
    //console.log('onDragStart',todos)
    /*...*/
  }, [store.potalPosition]);
  const onDragUpdate = useCallback(() => {
    //console.log('onDragUpdate',todos)
    /*...*/
  }, [store.potalPosition]);
  const onDragEnd = useCallback((args) => {
    const _todos = store.potalPosition.slice(0);
    const dragble = _todos.splice(args.source.index,1);
    _todos.splice(args.destination.index,0,dragble[0]);
    console.log( _todos );
    dispatch({ type: 'layout/portal', payload : _todos });
  }, [store.potalPosition]);

  return (
    positon 
      ?   <>
            <button onClick={() => setPosition(!positon) }>완료</button>
            <DragDropContext
              onBeforeCapture={onBeforeCapture}
              onBeforeDragStart={onBeforeDragStart}
              onDragStart={onDragStart}
              onDragUpdate={onDragUpdate}
              onDragEnd={onDragEnd}
            >
              <Drop todos={store.potalPosition}/>
            </DragDropContext>
          </>
      :   <>
            <button onClick={() => setPosition(!positon) }>수정</button>
            <div className="wrap">
              {store.potalPosition.map((item, index) => <div key={index} className={`${item.className} hover`}>{item.Compnent && <item.Compnent/>}</div>)}
            </div>
          </>
  );
}



export {
  App
}
