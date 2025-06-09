import React from 'react'
import assets from '../assets'

function BottomBanner() {
  return (
    <div className='relative mt-24'>
        <img src={assets.bottom_banner_image} alt="Banner" className='w-full hidden md:block' />
        <img src={assets.bottom_banner_image_sm} alt="Banner" className='w-full md:hidden' />
    </div>
  )
}

export default BottomBanner