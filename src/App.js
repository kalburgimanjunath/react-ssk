import React, { useState, useEffect } from 'react';
import './style.css';
import { CardView, Header } from './components/';
import { Home, LandingPage, StaticPages, Members, AllMembers } from './pages/';
import { Routes, Route } from 'react-router-dom';
export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/appPvZcQWqkcYW3YK/Members?api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.records);
        // console.log(data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="">
      <Header
        title="Ravinagar yuvak sangha - Shri Sahasrarjun Mitra Mandali (Gokul Road
        Hubli)"
      />
      <Routes>
        <Route path="/services" element={<StaticPages title="services" />} />
        <Route path="/products" element={<StaticPages title="products" />} />
        <Route path="/members" element={<Members users={users} />} />
        {/* <Route path="/all" element={<AllMembers users={users} />} /> */}
        {/* <Route path="/" exact element={<Members users={users} />} /> */}
        <Route path="/" exact element={<AllMembers users={users} />} />
      </Routes>
    </div>
  );
}
