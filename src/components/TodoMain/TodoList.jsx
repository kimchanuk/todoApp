import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/Data';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todoItem, searchHandlers } = useContext(DataContext);
  const newArrary = searchHandlers(todoItem);

  return (
    <div>
      <ul>
        {newArrary.map((t, i) => (
          <TodoItem todoItems={t} key={i} />
        ))}
      </ul>
    </div>
  );
}
