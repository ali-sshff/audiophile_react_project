import React from 'react'
import Hero from '../components/Hero'
import SharedProducts from '../components/SharedProducts'
import Categories from '../components/Categories'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      <Hero />
      <SharedProducts />
      <Categories />
      <About />
    </div>
  )
}

export default Home