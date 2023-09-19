import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/shared/desktop/icon-cart.svg'
import Logo from '../assets/shared/desktop/logo.svg'

 const Navbar = () => {
  return (
    <section className='bg-black'>
      <div className='container mx-auto flex items-center justify-between text-white py-8 border-b  '>
        <Link className='min-w-[10rem]' to='/'>
          <img className='w-full' src={Logo} alt="logo" /> 
        </Link>
        <div className='hidden md:flex space-x-8 justify-center text-sm uppercase xl:w-full'>
          <Link className='hover:text-light-orange' to='/'>Home</Link>
          <Link className='hover:text-light-orange' to='/headphones'>Headphones</Link>
          <Link className='hover:text-light-orange' to='/speakers'>Speakers</Link>
          <Link className='hover:text-light-orange' to='/earphones'>Earphones</Link>
         
        </div>
          <img src={CartIcon} alt="cart-icon" />
      </div>
    </section>
  )
}

export default Navbar