import React from 'react'
import { Link } from 'react-router'
import ProductCard from '../UI/productCard'

const PopularProducts = () => {
  return (
    <>
      <section className='my-[100px] pb-4 bg-background'>
        <div className="container">
            <div className=' flex flex-col items-center text-center'>
                <h2 className='pt-[100px] text-3xl text-primary'>Popular Products</h2>
                <p className='max-w-[750px] pt-7 pb-20 text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='pb-16'>
                <ul className='flex gap-10'>
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/">Furnitures</Link></li>
                    <li><Link to="/">Bags</Link></li>
                    <li><Link to="/">Decoration</Link></li>
                    <li><Link to="/">Accessories</Link></li>
                </ul>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-7 gap-y-[60px] '>
                <ProductCard url={"/product-1.png"} title="Simple Black Clock" price="$16.00"/>
                <ProductCard url={"/product-2.png"} title="Simple Black Clock" price="$16.00"/>
                <ProductCard url={"/product-3.png"} title="Simple Black Clock" price="$16.00"/>
                <ProductCard url={"/product-4.png"} title="Simple Black Clock" price="$16.00"/>
                <ProductCard url={"/product-5.png"} title="Simple Black Clock" price="$16.00"/>
                <ProductCard url={"/product-6.png"} title="Simple Black Clock" price="$16.00"/>
                <ProductCard url={"/product-7.png"} title="Simple Black Clock" price="$16.00"/>
                <ProductCard url={"/product-8.png"} title="Simple Black Clock" price="$16.00"/>
                <ProductCard url={"/product-9.png"} title="Simple Black Clock" price="$16.00"/>
                <ProductCard url={"/product-10.png"} title="Simple Black Clock" price="$16.00"/>
            </div>


        </div>
      </section>
    </>
  )
}

export default PopularProducts
