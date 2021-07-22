import React from "react";

export default function List(props) {
  const { name, done, id, handleChange, todo } = props;

  function DeleteTodo(choosed) {
    handleChange(todo.filter((i) => i.id !== choosed.id));
  }

  function DoneTodo(choosed) {
    //   making copy of the previous list
    const copyList = [...todo];

    //   finding the index to change
    const index = copyList.findIndex((i) => i.id === choosed.id);
    // change the condition
    if (copyList[index].done) {
      copyList[index].done = false;
    } else {
      copyList[index].done = true;
    }
    handleChange(copyList);
  }

  return (
    <div>
      <button id={id} value={done} onClick={(e) => DoneTodo(e.target)}>
        {done ? "[x]" : "[]"}
      </button>
      <span>{name}</span>
      <button id={id} onClick={(e) => DeleteTodo(e.target)} value={name}>
        Remove
      </button>
    </div>
  );
}
