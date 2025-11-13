import React from 'react'

const ProductCard = ({url, title, price}) => {
  return (
    <>
      <div className='relative cursor-pointer'>
        <img className='w-full' src={url} alt="product-1" />
        <div className='absolute bottom-5 left-1/2 -translate-x-1/2'>
            <p className='text-center text-nowrap'>{title}</p>
            <p className='text-center text-base text-product'>{price}</p>
        </div>
      </div> 
    </>
  )
}

export default ProductCard
