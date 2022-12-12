import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

const NavbarTest = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <Link to='/'>
      <img src={logo} alt="logo" className="w-20 h-20"/>
        </Link>
        <input type='text' placeholder='Search' className='bg-transparent border-b border-gray-600 focus:outline-none focus:border-gray-300'/>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Browse Games</li>
        <li className='p-4'>About</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Browse Games</li>
          <li className='p-4 border-b border-gray-600'>About</li>
      </ul>
    </div>
  );
};

export default NavbarTest;