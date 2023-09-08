import React from 'react'
import Navbar from './Navbar'
import HeroImg from '../assets/home/desktop/Bitmap.png'

const Hero = () => {
  return (
    <section className='bg-black'>
       <Navbar />
      <div className='max-container flex items-center justify-between xl:mx-40 py-8 xl:w-full' >
        <div className='text-white'> 
          <p className='text-sm uppercase tracking-widest'>new product</p>
          <h1>xx99 mark || headphones </h1>
          <p>Experince natural, lifelike aduio and exceptional buuild quility made for the passionate music enthusiast.</p>
          <button>See product</button>
        </div>
        <img src={HeroImg} alt="hero-img" />
      </div>
    </section>
  )
}

export default Hero