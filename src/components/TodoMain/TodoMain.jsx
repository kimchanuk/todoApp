import React, { useContext } from 'react';
import SearchInput from './SearchInput';
import TodoList from './TodoList';
import { DataContext } from '../../context/Data';
import Modals from './Modals';

export default function TodoMain() {
  const { modifyModals } = useContext(DataContext);
  return (
    <div className='mainContainer'>
      <SearchInput />
      <TodoList />
      {modifyModals && <Modals />}
    </div>
  );
}
