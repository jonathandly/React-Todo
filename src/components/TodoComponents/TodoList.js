import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todolist-div">
            {props.todos.map(todo => (
                <Todo 
                    onMouseEnter={() => props.onHover}
                    key={todo.id}
                    todo={todo}
                    handleCompletedTodo={props.handleCompletedTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;