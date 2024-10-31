import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    
      <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40twxt-sm'>
          {/* left-section */}
          <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gary-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nobis nihil maiores vero, dolore illo non animi cumque nesciunt dignissimos.</p>
          </div>
          {/* center-section */}
          <div>
            <p className='text-xl font-md mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* right-section */}
          <div>
            <p className='text-xl font-md mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>+9234561770</li>
              <li></li>
            </ul>
          </div>
        </div>
        {/* copy-right */}
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@ MB Codes - All Right Reversed</p>
        </div>
      </div>
   
  )
}

export default Footer
