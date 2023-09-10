import React from 'react'
import Products from './Products'
import HeroImg from '../assets/home/desktop/Bitmap.png'

const Hero = () => {
  return (
    <>
    <section className='bg-black xl:w-full'>
      <div className='container mx-auto flex items-center justify-between py-8'>
        <div className='text-white'> 
          <p className='text-sm uppercase tracking-[.625rem]'>new product</p>
          <h1 className='text-[3.5rem] uppercase leading-[3.625rem] my-6 font-bold'>XX99 Mark II <br /> headphones </h1>
          <p className='xl:w-[21rem] mb-10 '>Experince natural, lifelike aduio and exceptional buuild quility made for the passionate music enthusiast.</p>
          <a className='px-[1.97rem] py-[.94rem] bg-orange uppercase text-[.8125rem] font-bold'>See product</a>
        </div>
        <img src={HeroImg} alt="hero-img" />
      </div>
      </section>
      <Products />
      </>

  )
}

export default Hero