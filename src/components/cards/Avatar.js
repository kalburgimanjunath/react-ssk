import React from 'react';
export default function Avatar({ user }) {
  // console.log(user[0]);
  const pic = user[0];

  return <img src={user[0]['url']} width="100" className="avatar-pic" />;
}
