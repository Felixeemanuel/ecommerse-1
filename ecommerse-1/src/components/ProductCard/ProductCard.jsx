import React from 'react'
import './productCard.css'

const ProductCard = ({ product, index }) => {

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
                <button className='addToCartButton'>Add To Cart</button>
            </div>
        </div>
  )
}

export default ProductCard