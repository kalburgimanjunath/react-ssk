import React from 'react';
import Navbar from './Navbar';
export default function Header({ title }) {
  return (
    <div>
      <h3>{title}</h3>
      <Navbar />
    </div>
  );
}
