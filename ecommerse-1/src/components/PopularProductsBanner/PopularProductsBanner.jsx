import React from 'react'
import './popularProductsBanner.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ProductCard/ProductCard';
  
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const PopularProductsBanner = ({ products }) => {
    console.log('felix', products)
  return (
    <div className="popular-products-banner">
      <h1>Popular Products</h1>
      {(!products || products.length === 0) ? (
        <p>Loading products...</p>
      ) : (
        <Carousel
          swipeable
          draggable
          showDots
          responsive={responsive}
          ssr
          infinite
          autoPlay={false}
          // autoPlaySpeed={3000}
          keyBoardControl
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass='react-multi-carousel-dot-list'
          itemClass="carousel-item"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      )}
    </div>
  )
}

export default PopularProductsBanner