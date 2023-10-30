import React from 'react'
import Image from 'next/image'
import Model3IMG from '../../images/Model3.jpg'

const Model3 = () => {
  return (
    <div className='h-screen w-full transform'>
      <div className='absolute left-[50%] top-[20%] text-center transform_50'>
      <h1 className='page_text'>Model 3</h1>
      <h2 className='order_text'>Order Online for <i className='cursor-pointer underline'>Touchless Delivery</i></h2>
      </div>
      <Image className='w-full h-full object-cover' src={Model3IMG} alt='Tesla-Model-S'/>
      <div className='btn_parent'>
      <button className='btn_custom'>CUSTOM ORDER</button>
      <button className='btn_inventory'>EXISTING INVENTORY</button>
      </div>
    </div>
  )
}

export default Model3
