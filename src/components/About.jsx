import React from 'react'
import AboutImg from '../assets/shared/desktop/image-best-gear.jpg'

const About = () => {
  return (
    <section className='container flex mx-auto items-center justify-between'>
      <div className='w-[30.8125rem] '>
        <h2 className='uppercase mb-8 text-[3rem] leading-[2.75rem] font-bold'>Bringing you the <br /> <span className='text-orange'>best</span> audio gear</h2>
        <p className='text-[1.2rem] leading-[1.5625rem] font-medium opacity-50'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <div className=''>
        <img className='w-[33.75rem] h-[36.75rem]' src={AboutImg} alt="home describtion image" />
      </div>
    </section>
  )
}

export default About