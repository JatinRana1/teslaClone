"use client"
import React, { useState } from 'react'
import teslaLogo from '../../images/tesla.svg'
import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import { usePathname } from 'next/navigation';
import './navbar.css'

const Navbar = () => {
  const path = usePathname();
  const [ham,setHam] = useState(false)

  const hamToggler = () =>{
    if(ham===false)
      setHam(true)
    else
      setHam(false)
  }
  if(!path.startsWith('/account')){
  return (
    <>
    <header className='navbar'>
      {/* logo */}
        <Image className='mx-5 z-10' src={teslaLogo} width={180} height={20} alt='Logo' />

      {/* Nav Link */}
        <div className='hidden lg:block'>
          <ul className='navbar_sections '>
           <Link href='/'> <li className={`' navbar_elem ${path==='/'?'bg-black text-white':''} '`}>Model S</li></Link>
           <Link href='/model3'> <li className={`' navbar_elem ${path==='/model3'?'bg-black text-white':''} '`}>Model 3</li></Link>
           <Link href='/modelx'> <li className={`' navbar_elem ${path==='/modelx'?'bg-black text-white':''} '`}>Model X</li></Link>
           <Link href='/modely'> <li className={`' navbar_elem ${path==='/modely'?'bg-black text-white':''} '`}>Model Y</li></Link>
           <Link href='/solarroof'> <li className={`' navbar_elem ${path==='/solarroof'?'bg-black text-white':''} '`}>Solar Roof</li></Link>
           <Link href='/solarpanels'> <li className={`' navbar_elem ${path==='/solarpanels'?'bg-black text-white':''} '`}>Solar Panels</li></Link>
          </ul>
        </div>
      {/* Nav External Link */}
        <div className='hidden lg:block'>
          <ul className='navbar_sections'>
            <li className='navbar_elem cursor-pointer'>Shop</li>
            <Link href='/account'><li className='navbar_elem cursor-pointer'>Account</li></Link>
            <li className='navbar_elem cursor-pointer'>Menu</li>
          </ul>
        </div>
        {/* sm Navbar */}
        <button onClick={hamToggler} className='lg:hidden sm:block text-3xl z-10 transition-all duration-1000'><i className={`" ri-menu-line ${ham?'block':'hidden'} "`}></i><i className={`" ri-close-circle-line ${ham?'hidden':'block'} "`}></i></button>
    </header>
        <div className={`' lg:hidden absolute z-10 right-7 top-[8%] ${ham?' hidden ':' block '} '`}>
          <ul className='smnavbar_sections'>
           <Link href='/'> <li className='smnavbar_elem'>Model S</li></Link>
           <Link href='/model3'> <li className='smnavbar_elem'>Model 3</li></Link>
           <Link href='/modelx'> <li className='smnavbar_elem'>Model X</li></Link>
           <Link href='/modely'> <li className='smnavbar_elem'>Model Y</li></Link>
           <Link href='/solarroof'> <li className='smnavbar_elem'>Solar Roof</li></Link>
           <Link href='/solarpanels'> <li className='smnavbar_elem'>Solar Panels</li></Link>
          </ul>
        </div>
    </>
  )
  }
}

export default Navbar
