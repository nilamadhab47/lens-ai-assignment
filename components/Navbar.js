import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-primary p-4'>
        <div>
            <Image src="/images/logofullneurodactyl_.png" alt='logo' width={300} height={300}/>
        </div>
        <div className='md:flex items-center cursor-pointer hidden'>
            <ul className='flex justify-between gap-8 text-2xl text-white'>
                <li>Product</li>
                <li>Solutions</li>
                <li>Advantage</li>
                <li>Market</li>
                <li>News</li>
                <li>About Us</li>
                <li>Contacts</li>
                <li>Email</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar