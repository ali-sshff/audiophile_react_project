import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import CircleBg from '../assets/home/desktop/pattern-circles.svg'
import Speaker from '../assets/home/desktop/image-speaker-zx9.png'
import Earbuds from '../assets/home/desktop/image-earphones-yx1.jpg'
import Speaker2 from '../assets/home/desktop/image-speaker-zx7.jpg'


const Categories = () => {
  return (
    <section className='container mx-auto flex flex-col gap-[3rem] my-[12.5rem]'>
      <section className='xl:w-full h-[35rem] bg-orange rounded-lg relative flex items-center'>
        <div className='self-start justify-self-start'>
          <img className='scale-[106%] overflow-y-hidden'  src={CircleBg} alt="representation bacground sound vawe of the speaker" />
          <img className='absolute bottom-0 left-[10.3rem] w-[28.6rem] h-[31rem]' src={Speaker} alt="speaker itself" />
        </div>
        <div className='w-[21.8125rem] h-[18.9375rem] '>
          <h2 className='mb-6 text-[3.5rem] font-bold tracking-[.125rem] leading-[3.625rem] text-white'>ZX9 <br/>SPEAKER</h2>
          <p className=' mb-10 text-base text-white opacity-75'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link>
            <Button variant='secondary'>See Product</Button>
          </Link>
        </div>
      </section>
      <section className='xl:w-full h-90 overflow-hidden rounded-lg relative'>
        <div className=' absolute inset-y-36 left-36'>
          <h2 className='text-3xl font-bold text-black mb-8 '>ZX7 SPEAKER</h2>
           <Link >
            <Button variant='secondary'>See Product</Button>
          </Link>
        </div>
        <div className=''>
          <img className='w-full h-auto object-fill' src={Speaker2} alt="second speaker" />
        </div>
      </section>
      <section className='xl:w-full  flex justify-between'>
        <div className='  w-[34rem] h-70 border-2 overflow-hidden rounded-lg'>
          <img className=' w-full object-fill' src={Earbuds} alt="earbuds" />
        </div>
        <div className=' flex flex-col justify-center items-center w-[34rem] h-80 bg-zinc-100 rounded-lg'>
          <h2 className='text-3xl font-bold text-black mb-8'>YX1 EARPHONES</h2>
          <Link className='-ml-20'>
            <Button variant='secondary'>See Product</Button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Categories