import React from 'react'

const Categories = () => {
  return (
    <section className='container mx-auto'>
      <section className='xl:w-full h-[560px] bg-orange rounded-lg'>
        <div>IMAGE GOES</div>
        <div>
          <h2></h2>
          <p></p>
          <a></a>
        </div>
      </section>
      <section className='xl:w-full h-80 bg-zinc-100 rounded-lg'>
        <div>
          <h2></h2>
          <p></p>
          <a></a>
        </div>
        <div>IMAGE GOES</div>
      </section>
      <section className='xl:w-full flex justify-between '>
        <div className='w-[540px] h-80 bg-black rounded-lg'>IMAGE GOES</div>
        <div className='w-[540px] h-80 bg-zinc-100 rounded-lg'>
          <h2></h2>
          <p></p>
        </div>
      </section>
    </section>
  )
}

export default Categories