import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center'>
        <Image src='/car_rental_logo_small.png'
        alt = 'logo'
        width={150}
        height={150}
        />

        <div className='flex gap-5'>
            <h2>Home</h2>
            <h2>History</h2>
            <h2>Contact Us</h2>
        </div>

        <UserButton />

    </div>
  )
}

export default NavBar