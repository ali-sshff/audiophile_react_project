import React from 'react'
import Products from './Products'
import HeroImg from '../assets/home/desktop/Bitmap.png'

const Hero = () => {
  return (
    <>
    
    <section className='bg-black'>
      <div className='max-container flex items-center justify-between xl:mx-40 py-8 xl:w-full' >
        <div className='text-white'> 
          <p className='text-sm uppercase tracking-[.625rem]'>new product</p>
          <h1 className='text-[3.5rem] uppercase leading-[3.625rem] my-6 font-bold'>XX99 Mark II headphones </h1>
          <p className='xl:w-[21rem] mb-10 '>Experince natural, lifelike aduio and exceptional buuild quility made for the passionate music enthusiast.</p>
          <button className='w-40 h-12 bg-orange uppercase text-[.8125rem] font-bold'>See product</button>
        </div>
        <img src={HeroImg} alt="hero-img" />
      </div>
      </section>
      <Products />
      </>

  )
}

export default Hero