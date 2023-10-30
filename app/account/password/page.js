"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import teslaLogo from '../../../images/tesla.svg'
import languageLogo from '../../../images/lang.png'
import '../account.css'

const Password = () => {
  const [password,setpassword] = useState('')
  const bind_Password = (event) =>{
    setpassword(event.target.value);
  }

  return (
    <>
    {/* Heading */}
    <header className='nabar_account'>
     <Link href='/'><Image className='m-6 z-10' src={teslaLogo} width={122} height={20} alt='Logo' /></Link>
    <h2 className='heading_p transition'><Image src={languageLogo} width={20}/>en-US</h2>
    </header>
    {/* Body */}
    <div className='body_parent'>
       <div className='body_child'>
          <h2 className='body_h2'>Sign In</h2>
          <div className='flex flex-row align-middle'>
          <input type='email' autoFocus disabled className='input_email' value='Sample@gmail.com'/>
          <p className='page_login_text underline py-4  '>
            <i className='cursor-pointer hover:text-gray-800'>Change</i>
          </p>
          </div>
          <input type='password' autoFocus className='input transition' onChange={bind_Password} value={password}/>
          <Link href='/account/password'>
            <button className='btn_sign_in bg-blue-500 hover:bg-blue-600 text-white'>Next</button>
          </Link>
          <p className='page_login_text flex justify-center underline pb-[5rem] mt-6 '>
            <p2 className='cursor-pointer hover:text-gray-800'>Trouble Signing In?</p2>
          </p>
          <div class="flex items-center justify-center pb-[3rem]">
            <div class="w-1/3 border-t border-gray-300"></div>
            <div class="mx-4 page_login_text">Or</div>
            <div class="w-1/3 border-t border-gray-300"></div>
          </div>
          <button className='btn_sign_in bg-gray-100 hover:bg-gray-200 text-gray-600 '>Create Account</button>
       </div>
    </div>
    </>
  )
}

export default Password
