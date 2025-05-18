import React from 'react'
import './productCard.css'

const ProductCard = ({ product }) => {
  return (
    <div>
        <div className='productCard'>
            <div className='productCardImageWrapper'>
                <img src={product.images[0]} alt={product.title} />
            </div>
            <p>{product.title}</p>
            <div className='productCardPriceWrapper'>
              <p>${product.price}.00</p>
              <div className='productCardCategoryBox'>{product.category.name}</div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard