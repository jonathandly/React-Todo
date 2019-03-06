import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Learn React",
          id: 1529917077286,
          completed: false
        },
        {
          task: "Master React",
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
    let newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  handleTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
     if(todo.id === id) {
       todo.completed = !todo.completed;
       return todo;
     } else {
       return todo;
     }
    });
    this.setState({ todos });
  };

  clearTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList 
          handleCompletedTodo={this.toggleCompleted}
          todos={this.state.todos}
        />
        <TodoForm 
          value={this.state.todo}
          handleInputChange={this.handleTodo}
          handleAddTodo={this.addTodo}
          handleRemoveCompleted={this.clearTodos}
        />
      </div>
    );
  }
}

export default App;