import React from 'react'

const ToDoItem = ({todo,onDelete,onUpdate}) => {
  let updateStyle ={
    margin: "0 0  0 30px"
  };
  return (
    <>
    <div>
      <h4>{todo.Sno}.{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
     
      <button className="btn btn-sm btn-danger" style={updateStyle} onClick={() => {
            const newTitle = prompt('Enter new title:', todo.title);
            const newDesc = prompt('Enter new description:', todo.desc);
            if (newTitle && newDesc) {
              onUpdate(todo, newTitle, newDesc);
            }
          }}>Edit</button><br /><br />
    </div>
    <hr />
    </>
  );
}

export default ToDoItem
