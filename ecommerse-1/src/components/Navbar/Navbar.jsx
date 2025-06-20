import React, { useContext } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useCart } from '../../pages/useContext/cartContext'; // Adjust the import path as necessary




const Navbar = () => {
  const {cartItems} = useCart();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)


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
          <Link to={'/cart'} className='navCartLink'>
          <div className='navCartWrapper'>
            <FaShoppingCart className='shoppingCartIcon'/>
            {totalQuantity > 0 && (
              <div className='cartCount'>
                <p>{totalQuantity}</p>
              </div>
            )}
          </div>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar