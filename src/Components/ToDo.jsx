import React, { useState, useRef, useEffect } from 'react';
import './CSS/ToDo.css';
import { ToDoItems } from './ToDoItems';
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    const taskText = inputRef.current.value.trim();

    if (taskText !== '') {
      const newTodo = {
        id: uuidv4(),
        text: taskText,
        display: '',
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      updateLocalStorage([...todos, newTodo]);
      inputRef.current.value = '';
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      add();
    }
  };

  const updateLocalStorage = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  return (
    <div className='todo'>
      <div className="todo-header">To-Do-List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder='Add Your Task'
          className='todo-input'
          onKeyPress={handleKeyPress}
        />
        <div onClick={() => add()} className='todo-button'>Add</div>
      </div>
      <div className='todo-list'>
        {todos.map((item) => (
          <ToDoItems key={item.id} id={item.id} display={item.display} text={item.text} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
};

export default ToDo;
