import React from "react";
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from 'react-router-dom';

import { Home } from './components/home/Home';
import { Booking } from './components/booking/Booking';
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
    {/* Layout bọc các route con */}
    <Route path="/" element={<Layout />}>
      {/* Trang chủ */}
      <Route index element={<Home />} />
      {/* Trang đặt lịch */}
      <Route path="booking" element={<Booking />} />
    </Route>
  </Routes>
);
}

export default App;
