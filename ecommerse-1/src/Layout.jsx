import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.css';
import Navbar from './components/Navbar/Navbar';

const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Layout