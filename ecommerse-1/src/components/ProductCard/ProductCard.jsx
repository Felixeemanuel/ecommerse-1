import React from 'react'
import './productCard.css'

const ProductCard = ({ product }) => {
    console.log('card', product)
  return (
    <div>
        <div className='productCard'>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
        </div>
    </div>
  )
}

export default ProductCard