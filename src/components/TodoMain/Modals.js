import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';

export default function Modals() {
  const {} = useContext(DataContext);

  return (
    <form className='modifyModal'>
      <input type='text' />
    </form>
  );
}
