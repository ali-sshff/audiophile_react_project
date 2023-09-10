import React from 'react'
import thumbnailOne from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import thumbnailTwo from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import thumbnailThree from '../assets/shared/desktop/image-category-thumbnail-earphones.png'

const SharedProducts = () => {
  return (
    <section className='container mx-auto xl:my-[12.5rem] xl:w-full flex xl:flex-row sm:flex-col xl:justify-between sm:items-center text-center'>
      <div className='w-[21.875rem] h-[12.75rem] bg-light-gray rounded-lg  relative'>
        <img className='w-[9.68rem] h-[10rem] img-positioning' src={thumbnailOne} alt='headphones-image' />
        <div className='text-positioning uppercase text-center'>
          <p className=' text-lg  text-black font-bold'>Headphones</p>
          <a className='text-[.8125rem] opacity-50'>shop</a>
        </div>
      </div>
      <div className='w-[21.875rem] h-[12.75rem] bg-light-gray rounded-lg uppercase relative'>
        <img className='w-[9.68rem] h-[10rem] img-positioning' src={thumbnailTwo} alt='speakers-image'/>
        <div className='text-positioning uppercase text-center'>
          <p className='text-lg text-black font-bold'>Speakers</p>
          <a className='text-[.8125rem] opacity-50'>shop</a>
        </div>
      </div>
      <div className='w-[21.875rem] h-[12.75rem] bg-light-gray rounded-lg uppercase relative'> 
        <img className='w-[11.68rem] h-[10rem] img-positioning' src={thumbnailThree} alt='earphones-image'/>
          <div className='text-positioning uppercase text-center'>
            <p className='text-lg text-black font-bold'>Earphones</p>
            <a className='text-[.8125rem] opacity-50'>shop</a>
          </div>
      </div>
    </section>
  )
}

export default SharedProducts