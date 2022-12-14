import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

const NavbarBackup = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
      <Link to='/'>
        <img src={logo} alt="logo" className="w-20 h-20" />
      </Link>
      <input type='text' placeholder='Search' className='bg-[#0c2b45] rounded-xl lg:w-1/4 w-1/2 p-2 focus:outline-none focus:lg:w-1/2 duration-300 border-[#dadde0]' />
      <ul className='hidden md:flex'>
        <Link to='/'>
          <li className='p-4'>Home</li>
        </Link>
        <Link to='/games'>
          <li className='p-4'>Browse Games</li>
        </Link>
        <li className='p-4'>About</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0c2b45] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <Link to='/'>
          <li className='p-4 border-b border-gray-600'>Home</li>
        </Link>
        <Link to='/games'>
          <li className='p-4 border-b border-gray-600'>Browse Games</li>
        </Link>
        <li className='p-4 border-b border-gray-600'>About</li>
      </ul>
    </div>
  );
};

export default NavbarBackup;