import React from 'react'
import Image from 'next/image'
import SolarRootIMG from '../../images/SolarRoof.jpg'

const SolarRoof = () => {
  return (
    <div className='h-screen w-full transform'>
      <div className='absolute left-[50%] top-[20%] text-center transform_50'>
      <h1 className='page_text'>Solar Roof</h1>
      <h2 className='order_text'>Order Online for <i className='cursor-pointer underline'>Touchless Delivery</i></h2>
      </div>
      <Image className='w-full h-full object-cover' src={SolarRootIMG} alt='Tesla-Model-S'/>
      <div className='btn_parent'>
      <button className='btn_custom'>CUSTOM ORDER</button>
      <button className='btn_inventory'>EXISTING INVENTORY</button>
      </div>
    </div>
  )
}

export default SolarRoof
