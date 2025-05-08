import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './index.css';

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