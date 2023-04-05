import React from 'react';
import Card from './Card';
export default function CardView({ users }) {
  console.log(users);
  return (
    <div className="cardview">
      {users &&
        users.length > 0 &&
        users.map((item, index) => {
          return item && item.fields ? <Card user={item.fields} /> : null;
        })}
    </div>
  );
}
