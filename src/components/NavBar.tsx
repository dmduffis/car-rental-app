import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center justify-between p-5 shadow-sm border-b-[1px]'>
        <Image src='/car_rental_logo_small.png'
        alt = 'logo'
        width={150}
        height={150}
        />

        <div className="hidden md:flex gap-5">
            <h2 className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full hover:text-white px-3 hover:cursor-pointer'>Home</h2>
            <h2 className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full hover:text-white px-3 hover:cursor-pointer'>History</h2>
            <h2 className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full hover:text-white px-3 hover:cursor-pointer'>Contact Us</h2>
        </div>

        <UserButton />

    </div>
  )
}

export default NavBar