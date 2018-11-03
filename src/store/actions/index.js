import store from "../index";

export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    text: todo
  };
};

export const completeTodo = todoID => {
  return {
    type: "COMPLETE_TODO",
    index: todoID
  };
};

export const deleteTodo = todoID => {
  return {
    type: "DELETE_TODO",
    index: todoID
  };
};

export const updateTodo = (todoID, newText) => {
  return {
    type: "UPDATE_TODO",
    index: todoID,
    newText
  };
};
