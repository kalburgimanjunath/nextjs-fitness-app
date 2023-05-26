import { React, useState, useEffect } from 'react';
export default function Filters({ search, onsetSearch }) {
  // const [searchtxt, setSearch] = useState();

  const SearchBox = ({ searchString, setSearchString }) => {
    return (
      <div>
        <input
          type="text"
          name="search"
          className="searchbox"
          placeholder="search by job title/description/keywords/company"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
    );
  };
  return (
    <div>
      <SearchBox searchString={search} setSearchString={onsetSearch} />
    </div>
  );
}
