import React from 'react';

const TodoForm = props => {
    return (
        <form className="form">
            <input 
                className="input"
                type="text"
                name="todo"
                value={props.value}
                placeholder="...todos"
                onChange={props.handleInputChange}
            />
            <button className="button" onClick={props.handleAddTodo}>Add Todo</button>
            <button className="button" onClick={props.handleRemoveCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;