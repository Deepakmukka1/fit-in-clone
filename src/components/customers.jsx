import React from 'react'
import Customer1 from '../assets/c1.jpg'
import Customer2 from '../assets/c2.jpg'
import Customer3 from '../assets/c3.jpg'
import Customer4 from '../assets/c4.jpg'
import Customer5 from '../assets/c5.jpg'
import Customer6 from '../assets/c6.jpg'
const Customers = () => {
  return (
    <div className='flex sm:flex-row flex-col lg:justify-normal justify-center gap-4 items-center w-full mt-4 mb-4'>
        <div className='flex'>
        <img src={Customer1} className='xl:w-12 xl:h-12 w-10 h-10 rounded-full'/>
        <img src={Customer2} className='xl:w-12 xl:h-12 w-10 h-10 rounded-full -ml-5 border-gray-200 border-4'/>
        <img src={Customer3} className='xl:w-12 xl:h-12 w-10 h-10 rounded-full -ml-5 border-gray-200 border-4'/>
        <img src={Customer4} className='xl:w-12 xl:h-12 w-10 h-10 rounded-full -ml-5 border-gray-200 border-4'/>
        <img src={Customer5} className='xl:w-12 xl:h-12 w-10 h-10 rounded-full -ml-5 border-gray-200 border-4'/>
        <img src={Customer6} className='xl:w-12 xl:h-12 w-10 h-10 rounded-full -ml-5 border-gray-200 border-4'/>
        </div>
        <div>
          <h5 className='font-semibold xl:text-lg text-sm text-textprimary'>10,000+ <span className='text-[#a5aaae]'>happy customers!</span></h5>
        </div>
    </div>
  )
}

export default Customers