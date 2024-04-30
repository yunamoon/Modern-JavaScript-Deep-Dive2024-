import React, { createContext, useReducer, useRef } from 'react';
import './ToDoList.css';
import Editor from './editor/Editor';
import List from './list/List';

function reducer(state, action){
    switch(action.type) {
      case 'CREATE':
        return [action.data, ...state];
      case 'UPDATE':
        return state.map((item)=> item.id === action.targetId? {...item, isDone:!item.isDone} : item);
      case 'DELETE':
        return state.filter((item)=> item.id !== action.targetId);
      default:
        return state;
      }
  }

export const ToDoStateContext = createContext();
export const ToDoDispatchContext = createContext();

const ToDoList = () => {

    const [items, dispatch] = useReducer(reducer, []);
    const idRef = useRef(1);


    const onCreate = (content) => {
        dispatch({
          type : "CREATE",
          data : {
            id : idRef.current++,
            isDone : false,
            content : content,
            date : new Date().getTime(),
          },
        })
      };

      const onUpdate = (targetId)=> {
        dispatch({
            type:"UPDATE",
            targetId : targetId
          })
      };

      const onDelete = (targetId)=> {
        dispatch({
            type:"DELETE",
            targetId : targetId,
          })
      };


  return (
    <div>
    <ToDoStateContext.Provider value={items}>
        <ToDoDispatchContext.Provider value={{onCreate, onDelete, onUpdate}}>
            <Editor/>
            <List/>
        </ToDoDispatchContext.Provider>
    </ToDoStateContext.Provider>
    </div>
  )
}

export default ToDoList