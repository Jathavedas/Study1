import { useState } from "react";

function App() {
  const [todolist, settodolist] = useState([]);
  const [task, settask] = useState("");


  const handleadd = () => {
    const newtodo = {
      id: todolist.length == 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: task,
      taskStatus: false,
    };
    settodolist([...todolist, newtodo]);
    settask("");
  };

  const handledelete = (todoid) => {
    const filtertodos = todolist.filter((todo) => todo.id != todoid);
    settodolist(filtertodos);
  };

  const togletodo = (todoid) => {
    const todos = todolist.map((todo) =>
      todo.id === todoid ? { ...todo, taskStatus: !todo.taskStatus } : todo
    );
    settodolist(todos);
  };
  return (
    <>
      <input onChange={(event) => settask(event.target.value)} />
      <button onClick={handleadd}>Add</button>
      {todolist.map((todo) => (
        <>
          <div key={todo.id} style={{color:todo.taskStatus?"green":"black"}}>
            {" "}
            {todo.taskName}
            <button onClick={() => handledelete(todo.id)}> X</button>
            <button onClick={() => togletodo(todo.id)}>Complete</button>
          </div>
        </>
      ))}
    </>
  );
}

export default App;
