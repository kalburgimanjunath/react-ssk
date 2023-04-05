import React, { useState, useEffect } from 'react';
import { CardView } from '../components/';
export default function Members({ title, users }) {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResults] = useState(users);
  // console.log(users);
  const filterData = () => {
    return (
      users &&
      users.find((item) => {
        return (
          item.fields['[Full name] First Name'].toLowerCase() ===
          'Manjunath'.toLowerCase()
        );
      })
    );
  };
  useEffect(() => {
    setSearchResults([filterData()]);
  }, [search, filterData]);
  console.log(filterData());
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          type="text"
          placeholder="search members"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {searchResult && searchResult.length > 0 ? (
        <CardView users={searchResult} />
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
}
