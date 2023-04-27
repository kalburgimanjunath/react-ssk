import React, { useState, useEffect } from 'react';
import { CardView, MyTable } from '../components/';

export default function AllMembers({ title, users }) {
  const [searchResult, setSearchResults] = useState();

  return (
    <div style={{ padding: '20px 20px' }}>
      {/* <h3>{title}</h3> */}
      <div>
        <strong>Total:{users && users.length}</strong>
      </div>

      {users && users.length > 0 ? (
        <MyTable users={users} confidential="true" />
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
