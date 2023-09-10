import React from 'react'
import data from '../data.json'

const SharedProducts = () => {
  return (
    <section className=' max-container xl:mx-40 xl:my-[12.5rem] xl:w-full flex items-center gap-[1.87rem] text-center'>
      {
        data.map(({others}) => 
          {console.log(others)},
          <div className='w-[21.875rem] h-[12.75rem] bg-light-gray rounded-lg'>
            
            <p>Headphones</p>
            <button>shop</button>
          </div>
        )
      }
      
      {/* <div className='w-[21.875rem] h-[12.75rem] bg-light-gray rounded-lg'>
        <p>Headphones</p>
        <button>shop</button>
      </div>
      <div className='w-[21.875rem] h-[12.75rem] bg-light-gray rounded-lg'> 
        <p>Headphones</p>
        <button>shop</button>
      </div> */}
    </section>
  )
}

export default SharedProducts