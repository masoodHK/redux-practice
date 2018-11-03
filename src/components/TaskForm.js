import React from "react";

export default function TaskForm({
  onAdd,
  onUpdate,
  text,
  handleChange,
  update
}) {
  return (
    <div id="task-form">
      <input
        type="text"
        value={text}
        name="text"
        onChange={event => handleChange(event)}
      />
      {update ? (
        <button onClick={onUpdate}>Update</button>
      ) : (
        <button onClick={() => onAdd(text)}>Submit</button>
      )}
    </div>
  );
}
