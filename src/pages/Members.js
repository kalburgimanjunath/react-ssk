import React, { useState, useEffect } from 'react';
import { CardView } from '../components/';
export default function Members({ title, users }) {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResults] = useState();
  const filterData = () => {
    return (
      users &&
      users.find((item) => {
        return (
          item.fields['[Full name] First Name'].toLowerCase() ===
          search.toLowerCase()
        );
      })
    );
  };
  useEffect(() => {
    if (search == '') {
      setSearchResults(users);
    } else {
      let data = [filterData()];
      if (data && data.length > 0 && data != undefined) {
        setSearchResults(data);
      }
    }
  }, [search, users]);
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
      <div>Total:{searchResult && searchResult.length}</div>
      <CardView users={searchResult} />
      {/* {search !== '' && searchResult ? (
        <CardView users={searchResult} />
      ) : search === '' ? (
        <div>Hello world</div>
      ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
}
