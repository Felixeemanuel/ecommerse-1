import React, { useContext, useState } from 'react'
import { ProductsContext } from '../useContext/context'
// import IntroBanner from '../../components/IntroBanner/IntroBanner'
import './homePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import PopularProductsBanner from '../../components/PopularProductsBanner/PopularProductsBanner'
import HomeCategoryFilter from '../../components/HomeCategoryFilter/HomeCategoryFilter'
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const {products, loading, error} = useContext(ProductsContext)

        const [selectedCategory, setSelectedCategory] = useState('All');
        const [searchQuery, setSearchQuery] = useState('');
        const [searchInput, setSearchInput] = useState('');
        const [validProducts, setValidProducts] = useState([]);
    
        const categories = ['All', ...new Set(products.map(p => p.category))]
    
        const filteredProducts = products
          .filter(product =>
          selectedCategory === 'All' || product.category === selectedCategory
          )
          .filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );

          console.log('filteredProducts', filteredProducts)

          

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
    <div className='homeSearchBarWrapper'>
      <div className='homeSearchBar'>
        <FaSearch className='searchIcon'/>
        <input type="text" 
        placeholder='Search..'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setSearchQuery(searchInput);
          }
        }}
        />
      </div>
    </div>
    <div className='homeProductsContainer'>
    <div className='homeProductsWrapper'>
      <AnimatePresence mode='wait'>
        {filteredProducts.length === 0 ? (
          <div className='noProducts'>No products found</div>
        ) : (
          filteredProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className='productLink'>
            <motion.div
            key={product.id} 
            product={product}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <ProductCard 
              product={product}
              />
            </motion.div>
            </Link>
          ))
        )}
      </AnimatePresence>
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