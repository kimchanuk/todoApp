import React, { createContext, useState } from 'react';

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const filters = ['all', 'active', 'completed'];
  //init headerFIlters
  const [filter, setFilter] = useState(filters[0]);
  //init headerFIlters states

  const [searchInput, setSearchInput] = useState('');

  const searchHandlers = () => {
    if (searchInput) {
      if (searchInput === '') {
        return todoItem;
      }
      return todoItem.filter(t => t.text.includes(searchInput));
      /////search 와 tabp메뉴
    } else {
      if (filter === 'all') {
        return todoItem;
      }
      return todoItem.filter(t => t.status === filter);
    }
  };

  //search

  const [todoItem, setTodoItem] = useState([
    { id: 1, text: '장보기', status: 'active' },
    { id: 2, text: '공부하기', status: 'active' },
  ]);
  //dummy data

  const [addInputValue, setAddInputValue] = useState('');
  //footer의 input의 todo입력값 state

  const removeHandler = id => {
    const removeValue = todoItem.filter(t => t.id !== id);
    setTodoItem(removeValue);
  };
  //삭제 로직

  const [modifyModals, setmodifyModal] = useState(false);

  const modifyModalHandler = () => {
    setmodifyModal(prev => !prev);
  };

  //수정하기

  const [selectedItem, setSeltedItem] = useState(null);

  return (
    <DataContext.Provider
      value={{
        filters,
        filter,
        setFilter,
        todoItem,
        setTodoItem,
        addInputValue,
        setAddInputValue,
        removeHandler,
        modifyModals,
        setmodifyModal,
        modifyModalHandler,
        selectedItem,
        setSeltedItem,
        searchInput,
        setSearchInput,
        searchHandlers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
