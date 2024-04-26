import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';

export default function TodoItem({ todoItem }) {
  const { removeHandler, modifyModalHandler } = useContext(DataContext);
  const { id, text, status } = todoItem;

  const removeHandle = () => {
    removeHandler(id);
  };

  const modalHandler = () => {
    modifyModalHandler();
  };

  return (
    <li className='todoItem'>
      <input type='checkbox' />
      <span>{text}</span>
      <span>{status}</span>
      <button onClick={modalHandler}>수정</button>
      <button onClick={removeHandle}>삭제</button>
    </li>
  );
}
