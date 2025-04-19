import React from 'react'

const Hero = () => {
  return (
    <div>
        <video
        autoPlay
        muted
        loop
        className='absolute w-full h-screen object-cover'
        >
            <source  src='/bg.mp4' type='video/mp4'/>
        </video>
    </div>
  )
}

export default Hero