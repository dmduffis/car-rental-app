import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div>
            <h1 className='text-gray-900 text-[40px] md:text-[50px] font-bold'>Premium Car Rental in Your Area</h1>
            <h2 className='text-gray-400 text-[20px] pt-2'>Book quality cars effortlessly without breaking the bank. Reserve your car now! </h2>
            <button className='p-2 px-4 mt-5 bg-blue-500 text-white rounded-full hover:scale-105 transition-all'>Explore Cars</button>
        </div>
        <div>
           <Image src='/hero.png'
           width={500}
           height={600}
           alt='hero'
           className='w-full object-cover align-center'/>
        </div>
    </div>
  )
}

export default Hero