import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='bg-[url("/banner.png")] bg-center bg-cover'>
        <div className='container py-[276px] relative'>
          <div className='w-[431px] text-3xl text-primary absolute left-2/4 '>
          <h1>Awesome Product Collection In 2022</h1>
          <button className='text-base cursor-pointer'>Shop Now</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
