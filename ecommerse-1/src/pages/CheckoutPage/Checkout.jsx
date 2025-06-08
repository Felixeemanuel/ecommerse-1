import React, { useState } from 'react'
import './checkout.css'
import { useCart } from '../../pages/useContext/cartContext.jsx';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    zip: yup
    .number()
    .typeError("ZIP must be a number")
    .required("ZIP is required")
    .min(5, "ZIP must be at least 5 digits"),
    country: yup.string().required("Country is required"),
    phone: yup
    .string()
    .matches(/^\d+$/, "Phone must contain only numbers")
    .min(10, "Phone must be at least 10 digits")
    .max(15, "Phone can't exceed 15 digits"),
    paymentMethod: yup.string().required("Payment Method is required"),
    cardNumber: yup.string()
    .matches(/^\d{16}$/, "Card must be 16 digits")
    .required("Card number is required"),
    expiryDate: yup.string().required("Expiry Date is required"),
    cvv: yup.string().required("CVV is required"),
})

const Checkout = () => {

    const [expiry, setExpiry] = useState("");

    const handleExpiryChange = (e) => {
      let value = e.target.value.replace(/\D/g, ""); // remove non-digits

      if (value.length >= 3) {
        value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
      }

      setExpiry(value);
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const onSubmit = (data) => {
        console.log("Form submitted successfully:", data);
        reset(); 
        alert("Order placed successfully!");
    }

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
            <form onSubmit={handleSubmit(onSubmit)} action="" className="formWrapper">
                <div className='formPartOne'>
                    <h2>Your info</h2>
                    <p>Please note that this form is only a simulation and will never store any information! <br /> Use dummy inputs for testing.</p>
                    <div className="formGroup">
                        <label htmlFor="name">Name:</label>
                        <input {...register("name")} type="text" id="name" name="name" required />
                        {errors.name && <p className="error">{errors.name.message}</p>}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email:</label>
                        <input {...register("email")} type="email" id="email" name="email" required />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="address">Address:</label>
                        <input {...register("address")} type="text" id="address" name="address" required />
                        {errors.address && <p className="error">{errors.address.message}</p>}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="city">City:</label>
                        <input {...register("city")} type="text" id="city" name="city" required />
                        {errors.city && <p className="error">{errors.city.message}</p>}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="zip">Zip Code:</label>
                        <input {...register("zip")} type="text" id="zip" name="zip" required />
                        {errors.zip && <p className="error">{errors.zip.message}</p>}
                    </div>
                </div>
                <div className="formPartTwo">
                    <h2>Payment</h2>
                    <div className="formGroup">
                        <label htmlFor="country">Country:</label>
                        <input {...register("country")} type="text" id="country" name="country" required />
                        {errors.country && <p className="error">{errors.country.message}</p>}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="phone">Phone Number:</label>
                        <input {...register("phone")} type="tel" id="phone" name="phone" required />
                        {errors.phone && <p className="error">{errors.phone.message}</p>}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="paymentMethod">Payment Method:</label>
                        <select {...register("paymentMethod")} id="paymentMethod" name="paymentMethod" required>
                            <option value="">Select a payment method</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="bankTransfer">Bank Transfer</option>
                        </select>
                        {errors.paymentMethod && <p className="error">{errors.paymentMethod.message}</p>}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input {...register("cardNumber")} type="text" id="cardNumber" name="cardNumber" required />
                        {errors.cardNumber && <p className="error">{errors.cardNumber.message}</p>}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <input {...register("expiryDate")} type="text" onChange={handleExpiryChange} id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
                        {errors.expiryDate && <p className="error">{errors.expiryDate.message}</p>}
                    </div>
                    <div className="formGroup">
                        <label htmlFor="cvv">CVV:</label>
                        <input {...register("cvv")} type="text" id="cvv" name="cvv" required />
                        {errors.cvv && <p className="error">{errors.cvv.message}</p>}
                    </div>
                </div>
                <button type="submit" className="submitButton" disabled={!isValid}>Place Order</button>
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