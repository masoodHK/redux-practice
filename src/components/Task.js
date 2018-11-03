import React from "react";

export default function Task({ todos, onComplete, changeForm, onDelete }) {
  return (
    <div id="tasks">
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none"
            }}
            className="task"
          >
            <p>{todo.text + " "}</p>
            <button onClick={() => onComplete(index)}>
              {todo.isCompleted ? "undone" : "done"}
            </button>
            <button onClick={() => changeForm(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
