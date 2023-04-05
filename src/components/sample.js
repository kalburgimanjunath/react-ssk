import React from 'react';
import Navbar from './Navbar';
export default function Sample({ title }) {
  return (
    <div>
      <h3>{title}</h3>
      <Navbar />
    </div>
  );
}
