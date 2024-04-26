import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';

export default function ModifyModal() {
  const { setmodifyModal } = useContext(DataContext);

  const cencleHandler = () => {
    setmodifyModal(false);
  };

  return (
    <form className='modifyModal'>
      <input />
      <button onClick={cencleHandler}>취소</button>
    </form>
  );
}
