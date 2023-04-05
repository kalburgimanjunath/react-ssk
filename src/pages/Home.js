import React from 'react';
import { CardView } from '../components/';
export default function Home({ title, users }) {
  return (
    <div>
      <h3>{title}</h3>
      {users && users.length > 0 ? (
        <CardView users={users} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
