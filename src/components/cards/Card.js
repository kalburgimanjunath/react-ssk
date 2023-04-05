import React from 'react';
import Avatar from './Avatar';
export default function Card({ user }) {
  return (
    <div className="card">
      {user && user['photos'] ? (
        <Avatar user={user['photos']} />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
          width="100"
          height="100"
          className="avatar-pic"
        />
      )}
      <div className="name">
        {user['[Full name] First Name'] +
          ' ' +
          user['[Full name] Middle Name'] +
          '' +
          user['[Full name] Last Name']}
      </div>
      <div className="job">{user['Occupation']}</div>
    </div>
  );
}
