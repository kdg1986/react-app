import React,{ useCallback,useState,useEffect } from 'react';
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';
import "@STYLE/potal.scss"; 
import withComponentSplitting from '@/components/withComponentSplitting';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


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
    const init = [
      { id: "0", title: "A", className : "drag d1", Compnent : withComponentSplitting( () => import('../inbox/inboxGrid') ) },
      { id: "1", title: "B", className : "drag d2", Compnent : withComponentSplitting( () => import('./Table') ) },
      { id: "2", title: "C", className : "drag d3", Compnent : withComponentSplitting( () => import('./Table') ) },
      { id: "3", title: "D", className : "drag d4"},
      { id: "4", title: "D", className : "drag d5"},
      { id: "5", title: "D", className : "drag d6"},
      { id: "6", title: "D", className : "drag d7"},
    ]
    const initPotal = async () => {      
      try {        
        const res = await axios.get(`${ELASTIC_URL}/user/info/admin?pretty&filter_path=_source`);
        const sort = JSON.parse(res.data._source.order);        
        if(sort.length > 0){          
          dispatch({ type: 'layout/portal', payload : sort.reduce( (acc,cur,idx,arr) => acc = acc.concat( init.filter(item => item.id === cur ) ),[]) });
        }else{
          throw 'Parameter is not a number!';
        }
      } catch (error) {
        console.log( error );                        
        dispatch({ type: 'layout/portal', payload : init });
        axios.POST(`${ELASTIC_URL}/user/info/admin`, { order: JSON.stringify(init.map(({id})=> id )) });        
      }
    };      
    initPotal();          
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
    axios.put(`${ELASTIC_URL}/user/info/admin`, { order: JSON.stringify(_todos.map(({id})=> id ))   })
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
