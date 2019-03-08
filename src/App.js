import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

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

    const list = [...this.state.todos];
    localStorage.setItem('list', JSON.stringify(list));
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

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  hydrateState() {
    for(let key in this.state) {
      if(localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch(e) {
          this.setState({ [key]: value });
        }
      }
    }
  }
  
  saveStateToLocalStorage() {
    for(let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  componentDidMount() {
    this.hydrateState();

    window.addEventListener (
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener (
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }
  onMouseEnter() {
   const bullet = document.querySelector('.bullet');
   bullet.setAttribute('style', {transform: 'rotate(360deg)'});
  }

  render() {
    return (
      <div className="App">
        <TodoForm 
          value={this.state.todo}
          handleInputChange={this.handleTodo}
          handleAddTodo={this.addTodo}
          handleRemoveCompleted={this.clearTodos}
        />
        <TodoList 
          handleCompletedTodo={this.toggleCompleted}
          todos={this.state.todos}
          onHover={this.onMouseEnter}
        />
      </div>
    );
  }
}

export default App;