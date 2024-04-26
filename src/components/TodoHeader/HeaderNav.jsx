import React, { useContext } from 'react';
import { DataContext } from '../../context/Data';

export default function HeaderNav() {
  const { filters, filter, setFilter } = useContext(DataContext);

  return (
    <ul className='headerNavContainer'>
      {filters.map((t, i) => (
        <li key={i} className='headerNavContainerList'>
          <button
            onClick={() => {
              setFilter(t);
            }}
          >
            {t}
          </button>
        </li>
      ))}
    </ul>
  );
}
