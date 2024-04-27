import React, { useContext } from 'react';
import SearchInput from './SearchInput';
import TodoList from './TodoList';
import { DataContext } from '../../context/Data';

export default function TodoMain() {
  return (
    <div className='mainContainer'>
      <SearchInput />
      <TodoList />
    </div>
  );
}
