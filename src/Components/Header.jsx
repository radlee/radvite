import React from 'react';
import logo from './../assets/Images/logo.png';
import { IoLogoYoutube } from "react-icons/io5";

function Header() {
  return (
    <div className='flex justify-between items-center'>
      <img src={logo} alt="logo" className='w-[180px]'/>
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>About radblok</li>
        <li className='hover:font-bold cursor-pointer'>Contact Me</li>
      </ul>
      <button className='bg-red-500 rounded-full text-white'>
        Subscribe <IoLogoYoutube />
      </button>
    </div>
  )
}

export default Header