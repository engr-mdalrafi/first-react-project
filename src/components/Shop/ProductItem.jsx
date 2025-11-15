import React from 'react'
import { Link } from 'react-router'
import ProductCard from '../UI/productCard'
import Button from '../UI/Button'

const ProductItem = () => {
  return (
    <>
 <section className='my-[100px]  bg-background'>
    <div className="container">
        <div className='pt-32 pb-4'>
            
            <div className='pb-16'>
                <ul className='flex gap-10'>
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/">Furnitures</Link></li>
                    <li><Link to="/">Bags</Link></li>
                    <li><Link to="/">Decoration</Link></li>
                    <li><Link to="/">Accessories</Link></li>
                </ul>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-[60px] '>
                <ProductCard url={"/product-1.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
                <ProductCard url={"/product-2.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
                <ProductCard url={"/product-3.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
                <ProductCard url={"/product-4.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
                <ProductCard url={"/product-5.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
                <ProductCard url={"/product-6.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
                <ProductCard url={"/product-7.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
                <ProductCard url={"/product-8.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
                <ProductCard url={"/product-9.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
                <ProductCard url={"/product-10.png"} title="Simple Black Clock" Del="$50.00"NewPrice="$16.00"/>
            </div>
            <div className='mt-14 w-full flex justify-center items-center'>
                <div className='py-3 px-11 w-fit border'>
                    <Button title={"LOAD MORE"}/>
                </div>
            </div>
        </div>

        
    </div>
 </section>
    </>
  )
}

export default ProductItem
