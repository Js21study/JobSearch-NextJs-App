'use client';
import React, { useState } from 'react';

import SearchIcon from '../assets/svg/search.svg';
import Link from 'next/link';

interface SearchComponentProps {
  searchChanged?: boolean;
  setSearchChanged?: (value: boolean) => void;
  homePage?: boolean;
}
const SearchComponent = ({ setSearchChanged, homePage, searchChanged }: SearchComponentProps) => {
  const [searchValue, setSearchValue] = useState('');

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clickSearch = () => {
    const searchVal = { search: searchValue };
    localStorage.setItem('search', JSON.stringify(searchVal));
    setSearchChanged && searchChanged && setSearchChanged(!searchChanged);
  };
  return (
    <div className="flex justify-center p-4 md:p-20 ">
      <input
        value={searchValue}
        onChange={(e) => changeInputHandler(e)}
        type="text"
        className="w-full  pl-4 rounded-xl outline-none text-black text-2xl"
        placeholder="...search"
      />
      {homePage ? (
        <Link href="/jobs">
          {' '}
          <button
            className="rounded-xl w-28 bg-purple-400  ml-5 p-4 hover:bg-purple-300"
            onClick={clickSearch}
          >
            <SearchIcon />
          </button>
        </Link>
      ) : (
        <button
          className="rounded-xl w-28 bg-purple-400  ml-5 p-4 hover:bg-purple-300"
          onClick={clickSearch}
        >
          <SearchIcon />
        </button>
      )}
    </div>
  );
};

export default SearchComponent;
