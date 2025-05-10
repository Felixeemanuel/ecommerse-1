import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="nav-main">
        <Link to={'/'} className='navLogoWrapper'>
            <img src="/public/images/ecommerse-1-logo.png" alt="" />
        </Link>
        <div className='navLinksWrapper'>
            <Link to={'/'} className='navLink'>Home</Link>
            <Link to={'/products'} className='navLink'>Products</Link>
            <Link to={'/about'} className='navLink'>About</Link>
            <Link to={'/contact'} className='navLink'>Contact</Link>
        </div>
        <div className='navSearchWrapper'>
          <div>
            <input type="text" />
            <FaSearch className='searchIcon'/>
          </div>
        <FaShoppingCart className='shoppingCartIcon'/>
        </div>
    </nav>
  )
}

export default Navbar