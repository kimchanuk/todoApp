import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';
import { v4 as uuidv4 } from 'uuid';

export default function TodoFooter() {
  const { addInputValue, setAddInputValue, todoItem, setTodoItem } =
    useContext(DataContext);

  const inputChangeHandler = e => {
    const eValue = e.target.value;
    setAddInputValue(eValue);
  };

  const addTodoHandler = e => {
    e.preventDefault();
    const addTodoItem = {
      id: uuidv4(),
      text: addInputValue,
      status: 'completed',
    };
    setTodoItem([addTodoItem, ...todoItem]);
    setAddInputValue('');
  };

  return (
    <div className='searchInput'>
      <form onSubmit={addTodoHandler}>
        입력 :
        <input
          type='text'
          onChange={inputChangeHandler}
          value={addInputValue}
        />
      </form>
    </div>
  );
}
