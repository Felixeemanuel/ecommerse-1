import React, { useContext } from 'react'
import { ProductsContext } from './useContext/context'

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
    <div className='bg-red-500'>HomePage</div>
    </>
  )
}

export default HomePage