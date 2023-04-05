import React from 'react';
import Card from './Card';
export default function CardView({ users }) {
  console.log(users);
  return (
    <div className="cardview">
      {users &&
        users.map((item, index) => {
          return <Card user={item.fields} />;
        })}
    </div>
  );
}
