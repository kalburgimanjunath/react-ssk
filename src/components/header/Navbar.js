import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ title }) {
  return (
    <div>
      <Link to="./">Home</Link> |<Link to="./members">Members</Link> |
      <Link to="./services">Services</Link> |
      <Link to="./products">Products</Link> |<Link to="./all">All</Link>
    </div>
  );
}
