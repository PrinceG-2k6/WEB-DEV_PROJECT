import React from 'react';
import ToDoItem from "./ToDoItem";

const ToDos = (props) => {
  let mystyle ={
    minHeight: "70vh"
  }
  return (
    <>
    <div className='container' style={mystyle}>
      <h3 className='my-10'>To Do List</h3>

      {props.todos.length===0? "No To Do List Availabel" :
      
      props.todos.map((todo) => {
        return (
          <ToDoItem 
            key={todo.Sno} 
            todo={todo} 
            onDelete={props.onDelete}
            onUpdate={props.onUpdate} 
          />
          
        );
      })}

    </div>
    </>
  )
}

export default ToDos
