import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const Navbar = () => {
  return (
    <nav className="nav-main">
        <Link to={'/'} className='navLogoWrapper'>
            React Shop
        </Link>
        <div className='navLinksWrapper'>
            <Link to={'/'} className='navLink'>Home</Link>
            <Link to={'/products'} className='navLink'>Products</Link>
            <Link to={'/about'} className='navLink'>About</Link>
        </div>
        <div className='navSearchWrapper'>
        <FaGithub className='shoppingCartIcon'/>

        <FaShoppingCart className='shoppingCartIcon'/>
        </div>
    </nav>
  )
}

export default Navbar