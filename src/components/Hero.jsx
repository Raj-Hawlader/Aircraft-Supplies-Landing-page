import React from 'react'
import heroImage from '../../src/assets/banner-large-opt.jpg'

const Hero = () => {
  return (
    <div className='relative top-[-170px]'>
        <div className=' h-screen w-full' style={{
        background: `linear-gradient(to right ,rgba(0,0,0,1), rgba(0,0,0,.1)),url(${heroImage})`,
        backgroundSize:'cover',}}>
    </div>
    </div>
     )
}

export default Hero