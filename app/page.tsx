
import Hero from '@/components/main/Hero'
import NavbarDemo from '@/components/main/NavbarDemo'
import { ThreeDCardDemo } from '@/components/main/Projects'
import TechStack from '@/components/main/TechStack'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='h-screen w-full bg-black relative'>
        <Hero/>
      </div>
      <div className='absolute top-0 w-full'>
        <div className='bg-grey-800'>
          <NavbarDemo />
        </div>
      </div>
      <div>
        <TechStack/>
      </div>
      <div>
        <ThreeDCardDemo/>
      </div>
    </>

  )
}

export default page