import React, { useState } from 'react'
import Banner from './UI/Banner'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaGooglePlusG, FaRegStar, FaTwitter } from 'react-icons/fa6';
import Button from './UI/Button';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { TiSocialInstagram } from 'react-icons/ti';
import { RiFacebookFill } from 'react-icons/ri';

const ProductDetails = () => {

    const images = [
  {
    original: "/product-1.png",
    thumbnail: "/product-1.png",
  },
  {
    original: "/product-2.png",
    thumbnail: "/product-2.png",
  },
  {
    original: "/product-3.png",
    thumbnail: "/product-3.png",
  },
 
];

let [up, setUp] = useState(1)





  return (
    <>
      <Banner title="Product Details" path="Home"/>

      <section className='mt-[120px] mb-[100px]'>
        <div className="container">
            <div className='grid grid-cols-2 gap-7'>
                <div className='w-full'>
                <ImageGallery items={images} thumbnailPosition="left" showPlayButton={false} showFullscreenButton={false}/>
                </div>
                <div className='w-[540px]'>
                    <h2 className='text-3xl font-medium'>Black Clock</h2>
                    <p className='flex gap-2 text-amber-400'> 
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <p className='text-primary'>(Based on 0 Ratings)</p>
                    </p>
                    <p className='pt-6 pb-10 text-secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temf
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostr
                        exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                    <div className='flex gap-3.5 pb-4'>
                        <h2 className='text-xl text-secondary'><del>$15.00</del></h2>
                        <h2 className='text-3xl text-bagde'>$10.00</h2>
                    </div>
                    <div>
                        <h2 className='pb-3'>Choose Colour</h2>
                        <div className='flex gap-3 pb-7'>
                            <div className='h-5 w-5 rounded-full bg-red-500'></div>
                            <div className='h-5 w-5 rounded-full bg-blue-500'></div>
                            <div className='h-5 w-5 rounded-full bg-pink-500'></div>
                            <div className='h-5 w-5 rounded-full bg-amber-500'></div>
                        </div>
                    </div>
                    <div>
                        <h2 className='pb-3 text-xl'>Size</h2>
                        <div className='flex gap-3'>
                            <p className=''>XL</p>
                            <p className=''>M</p>
                            <p className=''>ML</p>
                            <p className=''>LM</p>
                            <p className=''>XXL</p>
                        </div>
                    </div>
                    <div className='py-8  flex gap-4 text-xl'>
                        <p>Quantity :</p>
                        <button onClick={()=>setUp(--up)}>-</button>
                        <p>{up}</p>
                        <button onClick={()=>setUp(++up)}>+</button>
                    </div>
                    <div className='flex items-center gap-4 text-secondary'>
                        <div className='py-3 px-11 border text-secondary block w-fit'>
                            <Button title="BUY NOW"/>
                        </div>
                        <div className='py-1 px-2 border text-2xl text-secondary block w-fit'>
                            <Button title={<CiHeart />}/>
                        </div>
                        <div className='py-1 px-2 border text-2xl text-secondary block w-fit'>
                            <Button title={<MdOutlineEmail />}/>
                        </div>
                    </div>
                    <div className='pt-7 flex gap-3 items-center text-secondary'>
                        <p>shere:</p>
                        <FaTwitter />
                        <TiSocialInstagram />
                        <RiFacebookFill />
                        <FaGooglePlusG />
                    </div>


                </div>
            </div>

            <div className='mt-20'>
                <nav>
                    <ul className='flex justify-center gap-14 pb-4 border-b text-xl'>
                        <li><a href="/">Description</a></li>
                        <li><a href="/">Data sheet</a></li>
                        <li><a href="/">Reviews</a></li>
                    </ul>
                </nav>
                <div className='pt-14 text-secondary text-justify'>
                    <h2 className='text-2xl'>Details</h2>
                    <p className='text-base pt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                    </p>
                    <h2 className='pt-14 pb-7 text-2xl text-secondary'>Features</h2>
                    <ul className='flex flex-col gap-3 mb-28'>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                        <li>Irure dolor in reprehenderit in voluptate velit esse</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et</li>
                        <li>Nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                </div>
            </div>

        </div>

      </section>
      
    </>
  )
}

export default ProductDetails
