import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';

export default function SearchInput() {
  const { setSearchInput } = useContext(DataContext);

  const searchHandler = e => {
    const value = e.target.value;
    setSearchInput(value);
  };

  return (
    <div className='searchInput'>
      검색 :
      <input type='text' placeholder='search...' onChange={searchHandler} />
    </div>
  );
}

//검색기능 로직
//onchagne될때 todo에 포함된 글자가 있으면 return todoItem
