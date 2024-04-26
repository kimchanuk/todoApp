import React from 'react';

export default function SearchInput() {
  return (
    <div className='searchInput'>
      <form>
        검색 :
        <input type='text' placeholder='search...' />
      </form>
    </div>
  );
}
