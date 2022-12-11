import React from 'react'
import NavbarItems from './NavbarItems';
import SearchBar from './SearchBar';
import logo from './images/logo.png';

function Navbar() {
  return (
    <div className="flex flex-row items-center w-full bg-gradient-to-r from-[#28313B] to-[#485461] px-10 py-4">
        <img src={logo} alt="logo" className="w-20 h-20"/>
        <SearchBar className="content-cente"/>
        <NavbarItems />
        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white text-2xl px-6 py-3 font-bold rounded-md">Sign in</button>
    </div>
  )
}

export default Navbar;