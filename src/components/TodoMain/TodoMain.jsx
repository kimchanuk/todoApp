import React, { useContext } from 'react';
import SearchInput from './SearchInput';
import TodoList from './TodoList';
import { DataContext } from '../../context/Data';
import ModifyModal from './ModifyModal';

export default function TodoMain() {
  const { modifyModal } = useContext(DataContext);
  return (
    <div className='mainContainer'>
      {modifyModal ? <ModifyModal /> : null}
      <SearchInput />
      <TodoList />
    </div>
  );
}
