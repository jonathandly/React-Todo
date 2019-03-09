import React from 'react';

const Todo = props => {
    return (
        <div
            className="todo-div"
            onClick={() => props.handleCompletedTodo(props.todo.id)}
            style={props.todo.completed ? { textDecoration: 'line-through', textDecorationColor: 'rgb(85,13,0)', opacity: '0.5' } : null}
        >
          <div className="bullet-div"><span className="bullet">¬</span></div>{props.todo.task}
        </div> 
    )
}

export default Todo;