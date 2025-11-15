import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({url, title, price, NewPrice, Del}) => {
  return (
    <>
      <div className='relative cursor-pointer bg-[##EFEFEF]'>
        <Link to="/productDetails"><img className='w-full' src={url} alt={url} /></Link>
        <div className='absolute bottom-5 left-1/2 -translate-x-1/2'>
            <p className='text-center text-nowrap'><Link to="/productDetails">{title}</Link></p>
            <div className='flex justify-center gap-2.5'>
              <p className='text-center text-base text-product '>{price}</p>
              <p className='text-center text-base text-product '> <del>{Del}</del></p>
              <p className='text-center text-base text-bagde'>{NewPrice}</p>
            </div>
        </div>
      </div> 
    </>
  )
}

export default ProductCard
