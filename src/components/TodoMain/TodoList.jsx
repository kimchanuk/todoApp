import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todoItem } = useContext(DataContext);

  return (
    <div>
      <ul>
        {todoItem.map((t, i) => (
          <TodoItem todoItem={t} key={i} />
        ))}
      </ul>
    </div>
  );
}
