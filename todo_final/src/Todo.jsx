import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, settodo] = useState([]);

  const handleAdd = () => {
    const todos = {
        id : todo.length == 0 ? 1 : todo[todo.length-1].id +1,
        taskName : task,
        status : false,
    }
    const newtodo = [...todo,todos]
    settodo(newtodo);
    
  };

  const handleDelete = (todoid) =>{
    const filtered = todo.filter((item) => item.id != todoid )
    settodo(filtered)
  }

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setTask(event.target.value);
        }}
        placeholder="Enter the todo"
      />
      <button onClick={handleAdd}>Add</button>
      {console.log(todo)}
      {todo.map((items) => (
        <>
        
        <div>{items.id}  {items.taskName}
        <button onClick={() => handleDelete(items.id)}>X</button>
        </div>
        </>
      ))}
    </>
  );
};

export default Todo;
