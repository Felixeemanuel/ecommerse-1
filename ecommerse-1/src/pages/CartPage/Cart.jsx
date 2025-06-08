import React from 'react'
import './cart.css'
import { useCart } from '../../pages/useContext/cartContext.jsx';
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { IoReceiptOutline } from "react-icons/io5";


const cart = () => {

    const { cartItems, updateQuantity, removeFromCart } = useCart();

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

    const formattedPrice = totalPrice.toFixed(2);

    const handleIncreaseQuantity = (item) => {
        updateQuantity(item.id, item.quantity + 1);
    }

    const handleDecreaseQuantity = (item) => {
        updateQuantity(item.id, item.quantity - 1);
        if (item.quantity <= 1) {
            removeFromCart(item.id);
        }
    }

    const handleRemoveItem = (item) => {
        removeFromCart(item.id);
    }

  return (
    <div className='cartWrapper'>
        <div className='cartHeader'>
            <h1>Your Cart</h1>
            <Link className='productDetailsBackButton' to={'/'}>
                <IoIosArrowBack className='productDetailsBackArrowIcon'/>
                Continue Shopping
            </Link>
        </div>
        <div className="cartItemsWrapper">
            <div className='cartSummaryWrapper'>
                <div className='cartSummaryHeader'>
                    <IoReceiptOutline className='cartSummaryIcon' />
                    <h2>Cart Summary</h2>
                </div>
                <div className='cartSummaryRow'>
                    <p>Total Items:</p>
                    <p>{totalQuantity}</p>
                </div>
                <div className="cartSummaryRow">
                    <p>Total Price:</p>
                    <p>${formattedPrice}</p>
                </div>
                <Link className='checkoutBtn' to={'/checkout'}>
                    Proceed to Checkout
                </Link>
            </div>
            <div className='cartItemsProductsWrapper'>
            {cartItems.length === 0 ? (
                <p>
                    Your cart is empty 
                    <FaRegFaceSadTear className='sadFaceIcon'/>
                </p>

            ) : (
                cartItems.map((item) => 
                    item.quantity > 0 && (
                        <div className='cartItem' key={item.id}>
                            <img src={item.images[0]} alt={item.name} className='cartItemImage' />
                            <div className='cartItemDetails'>
                                <h2>{item.title}</h2>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <div className='cartItemActions'>
                                <button onClick={() =>handleDecreaseQuantity(item)}>
                                    <FaMinus className='cartItemIcon'/>
                                </button>
                                <button onClick={() => handleIncreaseQuantity(item)}>
                                    <FaPlus className='cartItemIcon'/>
                                </button>
                                <button onClick={() => handleRemoveItem(item)}>
                                    <FaTrash className='cartItemIcon'/>
                                </button>
                            </div>
                        </div>
                    )
                )
            )}
            </div>
        </div>
    </div>
  )
}

export default cart