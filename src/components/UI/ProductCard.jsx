import React from 'react'

const ProductCard = ({url, title, price, NewPrice, Del}) => {
  return (
    <>
      <div className='relative cursor-pointer bg-[##EFEFEF]'>
        <img className='w-full' src={url} alt="product-1" />
        <div className='absolute bottom-5 left-1/2 -translate-x-1/2'>
            <p className='text-center text-nowrap'>{title}</p>
            <div className='flex justify-center gap-2.5'>
              <p className='text-center text-base text-product '>{price}</p>
              <p className='text-center text-base text-product '><del>{Del}</del></p>
              <p className='text-center text-base text-bagde'>{NewPrice}</p>
            </div>
        </div>
      </div> 
    </>
  )
}

export default ProductCard
