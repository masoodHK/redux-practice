import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import todoStore from "./store";
import Todo from "./components/Todo";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>Todo with Redux</p>
      <Todo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
  rootElement
);
