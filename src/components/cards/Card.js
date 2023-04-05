import React, { useState } from 'react';
import Avatar from './Avatar';
export default function Card({ user }) {
  const [isVisible, setVisible] = useState(false);
  const showCardDetail = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <div className="card" onClick={() => showCardDetail()}>
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
      <div hidden={!isVisible} className="details_people">
        <div onClick={() => showCardDetail()}>X</div>
        <h5>
          {user['[Full name] First Name'] +
            ' ' +
            user['[Full name] Middle Name'] +
            '' +
            user['[Full name] Last Name']}
        </h5>
        {user && user['photos'] ? <Avatar user={user['photos']} /> : 'no image'}
        <div className="job">{user['Occupation']}</div>
        <div>{user['Email']}</div>
        <div>
          <strong>Address</strong>
          <br />
          {user['Address']}
        </div>
        <div>
          <strong>Age</strong>
          <br />
          {user['Age']}
        </div>
        <div>
          <strong>Phone</strong>
          <br />
          {user['Phone number']}
        </div>
        <div>
          <strong>Blood Group</strong>
          <br />
          {user['Blood Group']}
        </div>
        <div>
          <strong>Occupation</strong>
          <br />
          {user['Occupation']}
        </div>
        <div>
          <strong>Education</strong>
          <br />
          {user['Education']}
        </div>
        <div>
          <strong>Family Details</strong>
          <br />
          {user['Family Details.']}
        </div>
      </div>
    </>
  );
}
