import React, { useContext, useState } from 'react'
import { ProductsContext } from '../useContext/context'
import IntroBanner from '../../components/IntroBanner/IntroBanner'
import './homePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import PopularProductsBanner from '../../components/PopularProductsBanner/PopularProductsBanner'
import HomeCategoryFilter from '../../components/HomeCategoryFilter/HomeCategoryFilter'
import { FaSearch } from "react-icons/fa";


const HomePage = () => {
    const {products, loading, error} = useContext(ProductsContext)
    console.log(products)

        const [selectedCategory, setSelectedCategory] = useState('All');
    
        const categories = ['All', ...new Set(products.map(p => p.category.name))]
        const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(p => p.category.name === selectedCategory)

    if (loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error.message}</div>
    }

  return (
    <>
    {/* <IntroBanner /> */}
    <div className="homePopularProductsCarouselWrapper">
      <PopularProductsBanner products={products}/>
    </div>
    <div className='homeSearchBar'>
      <FaSearch />
      <input type="text" placeholder='Search..'/>
    </div>
    <div className='homeProductsContainer'>
    <div className='homeProductsWrapper'>
      {products.length === 0 ? (
        <div className='noProducts'>No products found</div>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
      <HomeCategoryFilter 
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
      />
    </div>
    </>
  )
}

export default HomePage