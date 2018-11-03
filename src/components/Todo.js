import React, { Component } from "react";
import * as actionTodo from "../store/actions";
import { connect } from "react-redux";
import Task from "./Task";
import TaskForm from "./TaskForm";

class Todo extends Component {
  state = {
    text: "",
    todos: [],
    update: false,
    todoIndex: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    };
  }

  componentDidUpdate(props, state) {
    if (props.todos !== this.props.todos) {
      this.setState({
        todos: this.props.todos
      });
    }
  }

  onAdd = todo => {
    this.props.dispatch(actionTodo.addTodo(todo));
    this.setState({ text: "" });
  };

  onComplete = index => {
    this.props.dispatch(actionTodo.completeTodo(index));
  };

  onDelete = index => {
    this.props.dispatch(actionTodo.deleteTodo(index));
  };

  onUpdate = () => {
    const { text, todoIndex } = this.state;
    this.props.dispatch(actionTodo.updateTodo(todoIndex, text));
    this.setState({
      text: "",
      update: false,
      todoIndex: 0
    });
  };

  changeForm = index => {
    this.setState({
      text: this.state.todos[index].text,
      update: true,
      todoIndex: index
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { todos, text, update } = this.state;
    return (
      <div>
        <TaskForm
          text={text}
          handleChange={this.handleChange}
          onAdd={this.onAdd}
          onUpdate={this.onUpdate}
          update={update}
        />
        {!todos.length ? (
          <p>You have no tasks at the moment</p>
        ) : (
          <Task
            todos={todos}
            onDelete={this.onDelete}
            onComplete={this.onComplete}
            changeForm={this.changeForm}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todo);
