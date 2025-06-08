import React from 'react'
import './productDetails.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../useContext/context'
import Error404Page from '../Error404Page'
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react'
import { useCart } from '../useContext/cartContext'


const ProductDetails = () => {
    const { id } = useParams()
    // console.log('Product ID:', id)
    const { addToCart } = useCart()
    const { products, loading, error } = useContext(ProductsContext)
    
    // const product = products.find((product) => product.id === parseInt(id))
    
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('')

    useEffect(() => {
        if (!loading && products.length > 0) {
          const found = products.find(p => String(p.id) === id);
          setProduct(found || null);
          if (found?.images?.length > 0) {
            setSelectedImage(found.images[0]);
          }
        }
      }, [loading, products, id]);
    
    console.log('Product Details', product)

    if (loading || product === null) {
        return <div>Loading product...</div>;
      }
    
      if (error) {
        return <div>{error.message}</div>;
      }
    
      if (!product) {
        return <Error404Page />;
      }
    const { title, description, price, images } = product

  return (
    <>
        <div className='productDetailsContainer'>
            <div className="productDetailsBackButtonWrapper">
                <button className='productDetailsBackButton' onClick={() => window.history.back()}>
                <IoIosArrowBack className='productDetailsBackArrowIcon'/>
                    Back
                </button>
            </div>
            <div className="ProductDetailsMainContentWrapper">
                <div className='productDetailsImagesWrapper'>
                    {images.map((image, index) => (
                        <div key={index} className='productDetailsImage' onClick={() => setSelectedImage(image)}>
                            <img src={image} alt={`${title} ${index}`} />
                        </div>
                    ))}
                </div>
                <div className='productDetailsImageWrapper'>
                    <img src={selectedImage} alt={title} />
                </div>
                <div className='productDetailsInfo'>
                    <h1>{title}</h1>
                    <p className='productDetailDecription'>{description}</p>
                    <p className='productDetailPrice'>${price}</p>
                    <button onClick={() => addToCart(product)} className='addToCartButton'>Add To Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetails