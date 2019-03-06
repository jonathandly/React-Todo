import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input 
                type="text"
                name="todo"
                value={props.value}
                placeholder="...todos"
                onChange={props.handleInputChange}
            />
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleRemoveCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;