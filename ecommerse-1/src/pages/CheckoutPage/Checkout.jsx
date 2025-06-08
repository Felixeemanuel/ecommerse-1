import React from 'react'
import './checkout.css'
import { useCart } from '../../pages/useContext/cartContext.jsx';


const Checkout = () => {

        const { cartItems, updateQuantity, removeFromCart } = useCart();
    
        const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
    
        const totalPrice = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );
    
        const formattedPrice = totalPrice.toFixed(2);

  return (
    <div className="checkoutWrapper">
        <div className="checkoutFormsWrapper">
            <h1>Checkout</h1>
            <form action="" className="formWrapper">
                <div className='formPartOne'>
                    <div className="formGroup">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="zip">Zip Code:</label>
                        <input type="text" id="zip" name="zip" required />
                    </div>
                </div>
                <div className="formPartTwo">
                    <div className="formGroup">
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country" name="country" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="paymentMethod">Payment Method:</label>
                        <select id="paymentMethod" name="paymentMethod" required>
                            <option value="">Select a payment method</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="bankTransfer">Bank Transfer</option>
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input type="text" id="cardNumber" name="cardNumber" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="cvv">CVV:</label>
                        <input type="text" id="cvv" name="cvv" required />
                    </div>
                </div>
            </form>
        </div>
        <div className="checkoutSummaryWrapper">
            <div className='checkoutSummaryInnerWrapper'>
                <div className='checkoutSummaryHeader'>
                    <h2>Checkout Summary</h2>
                </div>
                <div className='checkoutSummaryRow'>
                    <p>Total Items:</p>
                    <p>{totalQuantity}</p>
                </div>
                <div className="checkoutSummaryRow">
                    <p>Total Price:</p>
                    <p>${formattedPrice}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout