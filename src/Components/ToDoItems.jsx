import React from 'react';
import './CSS/ToDoItems.css';
import tick from './Assets/tick.png';
import blank from './Assets/blank tick.png';
import cross from './Assets/cross.png';

export const ToDoItems = ({ id, display, text, todos, setTodos }) => {
  const toggle = () => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, display: item.display ? '' : 'line-through' } : item
    );
    setTodos(updatedTodos);
  };

  const deleteTask = () => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='todoitems'>
      <div className='todoitems-container' onClick={toggle}>
        {display === '' ? <img className='blank' src={blank} alt='' /> : <img className='tick' src={tick} alt='' />}
        <div className='todoitems-text' style={{ textDecoration: display }}>
          {text}
        </div>
      </div>
      <img className='cross' src={cross} alt='' onClick={deleteTask} />
    </div>
  );
};
