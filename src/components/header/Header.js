import React from 'react';
import Navbar from './Navbar';
export default function Header({ title }) {
  return (
    <div className="header-align">
      <div style={{ width: '50%' }} className="flex-start">
        <h4>{title}</h4>
      </div>
      <div style={{ width: '50%' }} className="flex-end">
        <img
          src="https://scontent.fblr4-1.fna.fbcdn.net/v/t1.18169-9/22730178_1748004751877863_1290657847804424578_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9267fe&_nc_ohc=JnUYZcGXhMkAX8A2Cuu&_nc_ht=scontent.fblr4-1.fna&oh=00_AfAlAoJyG_zZdHqxXOQ8q9IfUs7Lz4PPqyOespy_OJrkGQ&oe=64716940"
          width="100"
          height="100"
        />
      </div>
      <Navbar />
    </div>
  );
}
