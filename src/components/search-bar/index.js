import React from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ value, setValue, placeholder }) {
  return (
    <form
      className='search-bar'
      onSubmit={(event) => setValue(event.target.value)}
    >
      <FiSearch size={20} />
      <input
        type='text'
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
      />
    </form>
  );
}

export default SearchBar;
