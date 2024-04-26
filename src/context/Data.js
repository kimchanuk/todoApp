import React, { createContext, useState } from 'react';

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const filters = ['all', 'active', 'completed'];
  //init headerFIlters
  const [filter, setFilter] = useState(filters[0]);
  //init headerFIlters states

  const [todoItem, setTodoItem] = useState([
    { id: 1, text: '장보기', status: 'completed' },
    { id: 2, text: '공부하기', status: 'completed' },
  ]);
  //dummy data

  const [addInputValue, setAddInputValue] = useState('');
  //footer의 input의 todo입력값 state

  const removeHandler = id => {
    const removeValue = todoItem.filter(t => t.id !== id);
    setTodoItem(removeValue);
  };
  //삭제 로직

  const [modifyModal, setmodifyModal] = useState(false);

  const modifyModalHandler = () => {
    setmodifyModal(true);
  };

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
        modifyModal,
        setmodifyModal,
        modifyModalHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
