import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/Data';
import Modals from './Modals';

export default function TodoItem({ todoItems }) {
  const {
    removeHandler,
    modifyModalHandler,
    setSeltedItem,
    todoItem,
    setTodoItem,
  } = useContext(DataContext);
  const { id, text, status } = todoItems;

  const removeHandle = () => {
    removeHandler(id);
  };

  const modalHandler = () => {
    modifyModalHandler();
    setSeltedItem(todoItems);
  };

  const changeCheckHandler = e => {
    const checkStatus = e.target.checked ? 'completed' : 'active';
    const checkValue = todoItem.map(t =>
      t.id === id ? { ...todoItems, status: checkStatus } : t
    );
    setTodoItem(checkValue);
  };

  return (
    <>
      <li className='todoItem'>
        <input
          type='checkbox'
          checked={status === 'completed'}
          onChange={changeCheckHandler}
        />
        <span
          style={{
            color: status === 'completed' ? 'red' : 'black',
            textDecoration: status === 'completed' ? 'line-through' : 'none',
          }}
        >
          {text}
        </span>
        <span>{status}</span>
        <button onClick={modalHandler}>수정</button>
        <button onClick={removeHandle}>삭제</button>
      </li>
    </>
  );
}
