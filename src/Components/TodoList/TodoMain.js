import React from 'react';
import { useReducer } from 'react';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.scss'


function reducer(state,action){
  if(action.type === "add"){
    return [...state,{
      id:Math.random(),
      text:action.payload.text,
      isCompleted:false
    }]
  }else if(action.type === "delete"){
    return state.filter((t) => t.id !== action.payload.id)
  }else if(action.type === "change"){
    return state.map((todo)=>{
            if(todo.id === action.payload.id){
              return action.payload.newTodo;
            }else return todo
          });
  }else if(action.type == "clearCompleted"){
    return state.filter((todo) =>!todo.isCompleted)
  }
}


export const changeDelete = React.createContext()

export default function TodoMain() {
  const [todos,dispatch] = useReducer(reducer,[
    {
      id:Math.random(),
      text:"Learn JS",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"Learn CSS",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"Learn React",
      isCompleted:false
    }
  ])

  return (
    <div className='todoBody'>
        <div className="todoMainDiv">
            <TodoForm onAdd={(text)=>{
              dispatch({
                type: 'add',
                payload: {
                  text:text
                }
              })
            }}/>
            <changeDelete.Provider value={[(newTodo) =>{
              dispatch({
                type:"change",
                payload:{
                  id:newTodo.id,
                  newTodo:newTodo
                }
              })
            },(todo)=>{
              dispatch({
                type:'delete',
                payload:{
                  id:todo.id
                }
              })
            }]}>
            <TodoList todos = {todos} />
          </changeDelete.Provider>
            <TodoFooter todos = {todos} onClearCompleted ={()=>
              dispatch({
                type:'clearCompleted',
              })
            }/>

        </div>
    </div>
  );
}


