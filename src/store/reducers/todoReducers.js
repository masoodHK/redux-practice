export default function todoReducers(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          isCompleted: false
        }
      ];

    case "COMPLETE_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    case "UPDATE_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          todo.text = action.newText;
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((todo, index) => {
        if (index === action.index) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
}
