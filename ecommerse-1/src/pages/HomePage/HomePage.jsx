import React, { useContext } from 'react'
import { ProductsContext } from '../useContext/context'
import IntroBanner from '../../components/IntroBanner/IntroBanner'
import './homePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'

const HomePage = () => {
    const {products, loading, error} = useContext(ProductsContext)
    console.log(products)

    if (loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error.message}</div>
    }

  return (
    <>
    <IntroBanner />
    <h1 className='homeProductsTitle'>Products</h1>
    <div className='homeProductsWrapper'>
      {products.length === 0 ? (
        <div className='noProducts'>No products found</div>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
    </>
  )
}

export default HomePage