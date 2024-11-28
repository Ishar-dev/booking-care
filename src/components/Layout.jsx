import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './home/Header';
import { Footer } from './home/Footer';

export function Layout() {
  return (
    <>
      {/* Header luôn hiển thị */}
      <Header />

      {/* Nội dung chính sẽ thay đổi dựa trên route */}
      <main className="flex flex-col">
        <Outlet />
      </main>

      <div className="mt-20">
        <Footer />
      </div>
      
    </>
  );
}
