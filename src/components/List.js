import React, { useState } from 'react';
import Form from './Form';
import ToDo from './ToDo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <Form onSubmit={addTodo} />
            {todos.map((todo) => (
            <ToDo
                key={todo.id}
                todo={todo}
                completeTodo={()=>completeTodo(todo.id)}
            />
            ))}
        </>
    );
}

export default TodoList;