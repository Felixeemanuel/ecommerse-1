import React, { useEffect, useState } from 'react'
import './introBanner.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/images/introBannerImage1.jpg',
    title: 'Welcome to Our Store',
    buttonText: 'Shop Now',
    buttonLink: '/products',
  },
  {
    image: '/images/introBannerImage2.jpg',
    title: 'Welcome to Our Store',
    buttonText: 'Shop Now',
    buttonLink: '/products',
  },
  {
    image: '/images/introBannerImage3.jpg',
    title: 'Welcome to Our Store',
    buttonText: 'Shop Now',
    buttonLink: '/products',
  },
  
]

const IntroBanner = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000);

    return () => clearInterval(interval)
  }, [])

  const { image, title, buttonText, buttonLink } = slides[currentIndex]

  return (
    <div className='introBannerWrapper'>

      <AnimatePresence>
        <motion.div
        key={image}
        className='introBannerImage'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
          <img src={image} alt={title} />
          <div className='introBannerText'>
            <div className='introBannerTextWrapper'>
              <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              >
                {title}
              </motion.h2>
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              >
                <Link className='introBannerLink' to={buttonLink}>
                {buttonText}</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default IntroBanner