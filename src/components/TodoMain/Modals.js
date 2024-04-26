import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';

export default function Modals() {
  const {
    todoItem,
    setTodoItem,
    modifyModalHandler,
    selectedItem,
    setSeltedItem,
  } = useContext(DataContext);

  const { id, text, status } = selectedItem;

  const newInputSubmit = e => {
    e.preventDefault();
    modifyModalHandler();
    setTodoItem(
      todoItem.map(t => (t.id === id ? { ...todoItem, text: text, status } : t))
    );
  };

  const newInputValue = e => {
    const value = e.target.value;
    setSeltedItem({ ...selectedItem, text: value });
    //체인지시 기존의 선택된 아이템객체는 놔두고 텍스트만 e.target으로 변경
  };

  return (
    <form className='modifyModal' onSubmit={newInputSubmit}>
      <input type='text' value={text} onChange={newInputValue} />
      <button>확인</button>
      <button onClick={modifyModalHandler}>취소</button>
    </form>
  );
}

// const newInputValue = e => {
//     const newInputValue = e.target.value;
//     setSitem({ ...sItem, text: newInputValue });
//   };

// const newInputSubmit = e => {
//   e.preventDefault();
//   const newItem = todoItem.map(t => (t.id === id ? { ...sItem, text } : t));
//   setTodoItem(newItem);
//   modifyModalHandler();
// };
