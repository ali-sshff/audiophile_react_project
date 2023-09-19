import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/shared/desktop/logo.svg'
import Instagram from '../assets/shared/desktop/icon-instagram.svg'
import Facebook from  '../assets/shared/desktop/icon-facebook.svg'
import Twitter from  '../assets/shared/desktop/icon-twitter.svg'

const Footer = () => {
  return (
     <section className='bg-black '>
      <div className='container mx-auto flex items-center justify-between text-white h-[22rem] '>
        <div>
          <Link className='min-w-[143px]' to='/'>
            <img src={Logo} alt="logo" /> 
         </Link>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className='flex flex-col items-end justify-between'>
          <div className=' flex space-x-8 justify-center text-sm uppercase xl:w-full'>
            <Link className='hover:text-light-orange' to='/'>Home</Link>
            <Link className='hover:text-light-orange' to='/headphones'>Headphones</Link>
            <Link className='hover:text-light-orange' to='/speakers'>Speakers</Link>
            <Link className='hover:text-light-orange' to='/earphones'>Earphones</Link>
          </div>
          <div className='flex'>
            <Link className=''><img src={Facebook} alt="facebook-icon" /></Link>
            <Link className=''><img src={Twitter} alt="twitter-icon" /></Link>
            <Link className=''><img src={Instagram} alt="instagram-icon" /></Link>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Footer