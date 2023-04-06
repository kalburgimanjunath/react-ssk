import React, { useState, useEffect } from 'react';
import { CardView, MyTable } from '../components/';

export default function AllMembers({ title, users }) {
  const [searchResult, setSearchResults] = useState();

  return (
    <div>
      <h3>{title}</h3>
      <div>Total:{users && users.length}</div>

      {users && users.length > 0 ? (
        <MyTable users={users} />
      ) : (
        <div>No records</div>
      )}

      {/* <CardView users={searchResult} /> */}
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
