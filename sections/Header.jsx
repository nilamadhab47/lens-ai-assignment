import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
        <Navbar/>
        <div className="header flex flex-col md:flex-row justify-around items-center w-[97vw] h-[68vh]">
            <div className="desc mt-[16rem] md:mt-0">
                <h1 className='md:text-[46px] text-[30px] font-bold mb-16 font-tildaSansB text-primaryT'>Contactless fingerprint recognition</h1>
                <ul className=' list-disc text-primaryT pl-8 pb-8 lg:text-2xl text-xl'>
                    <li className='text-primaryT'>Highly accurate neural network algorithms</li>
                    <li>Work with scans and photo images</li>
                    <li>All types of fingerprints are supported</li>
                </ul>
                <span className='text-primaryT lg:text-2xl text-xl font-black '>Top-tier algorithm accuracy in <u>NIST PFT III evaluation</u></span>
            </div>
            <div className="header-img hidden md:block">
                <img src="/images/hand_sm_new.png" alt='hand' className='hand-image' />
            </div>
        </div>
    </>
  )
}

export default Header