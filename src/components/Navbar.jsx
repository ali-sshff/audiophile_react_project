import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/shared/desktop/icon-cart.svg'
import Logo from '../assets/shared/desktop/logo.svg'

 const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='container mx-auto flex items-center justify-between text-white py-8 border-b  '>
        <Link to='/'>
          <img src={ Logo } alt="logo" /> 
        </Link>
        <ul className='flex gap-8 justify-center text-sm uppercase xl:w-full'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/headphones'>Headphones</Link>
          </li>
          <li>
            <Link to='/speakers'>Speakers</Link>
          </li>
          <li>
            <Link to='/earphones'>Earphones</Link>
          </li>
        </ul>
          <img src={CartIcon} alt="cart-icon" />
      </div>
    </div>
  )
}

export default Navbar