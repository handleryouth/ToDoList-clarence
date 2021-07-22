import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";

export default function Input() {
  const [todo, setTodo] = useState(todoList);
  const [input, setInput] = useState();

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  function HandleInput(e) {
    const todoTemplate = {
      id: uuidv4(),
      name: e.value,
      done: false,
    };

    setInput(todoTemplate);
  }

  function HandleAdd() {
    setTodo([...todo, input]);
  }

  return (
    <div>
      <h1>To Do List</h1>

      <div>
        <label htmlFor="todo"> Add Todo</label>
        <input onChange={(e) => HandleInput(e.target)} type="text" id="todo" />
        <button onClick={HandleAdd}>Add</button>
      </div>

      <div>
        {todo.map((i) => (
          <List key={i.id} {...i} handleChange={setTodo} todo={todo} />
        ))}
      </div>
    </div>
  );
}

const todoList = [
  {
    id: uuidv4(),
    name: "todo 1",
    done: false,
  },
  {
    id: uuidv4(),
    name: "todo 2",
    done: false,
  },
  {
    id: uuidv4(),
    name: "todo 3",
    done: false,
  },
];
