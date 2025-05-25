import React from 'react'
import './productDetails.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../useContext/context'
import Error404Page from '../Error404Page'
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react'


const ProductDetails = () => {
    const { id } = useParams()
    const { products, loading, error } = useContext(ProductsContext)
    const product = products.find((product) => product.id === Number(id))
    console.log('Product Details', product)
    const [selectedImage, setSelectedImage] = useState(product.images[0])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error.message}</div>
    }
    if (!product) {
        return <Error404Page />
    }
    const { title, description, price, images } = product

    const formatPrice = (price) => {
        return parseFloat(price).toFixed(2).replace(/\.00$/, '');
    }

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
                    <button className='addToCartButton'>Add To Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetails