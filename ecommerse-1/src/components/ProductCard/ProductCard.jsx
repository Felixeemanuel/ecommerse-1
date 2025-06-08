import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../pages/useContext/cartContext'

const ProductCard = ({ product, index }) => {

  const { addToCart } = useCart()

  return (
    
        <div className='productCard'>
            <div className='productCardImageWrapper'>
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div className='productCardInfo'>
              <p className='productCardInfoTitle'>{product.title}</p>
              <div className='productCardPriceWrapper'>
                <p>${product.price}</p>
                <div className='productCardCategoryBox'>{product.category}</div>
              </div>
              <Link to={`/cart`} className='productCardLink'>
                <button onClick={() => addToCart(product)} className='addToCartButton'>Add To Cart</button>
              </Link>
            </div>
        </div>
  )
}

export default ProductCard