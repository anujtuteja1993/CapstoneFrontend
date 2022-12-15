import React, { useState, useContext } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from './images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import cart from './images/cart.png';
import { GameContext } from '../contexts/GameContext'

const NavbarTest = () => {

  let navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const { gamesInCart } = useContext(GameContext);
  let searchResults = [];

  const handleNav = () => {
    setNav(!nav);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let searchTemp = e.target.value;
      const SearchAPIURL = `http://localhost:8000/games/searchGamesbyName?game_name=${searchTemp}`;
      fetch(SearchAPIURL)
      .then(resp => resp.json())
      .then(({data}) => {
        searchResults = data;
        navigate('/searchresults', {state:{searchResults}});
      })
    }
  };

  return (
    <div className='flex lg:justify-evenly justify-between px-2 items-center h-24 max-w-full mx-auto text-white lg:px-10'>
      <Link to='/'>
        <img className="flex justify-start w-20 h-20" src={logo} alt="logo" />
      </Link>
      <input onKeyDown={handleKeyDown} type='text' placeholder='Search' className='bg-[#0c2b45] rounded-xl lg:w-1/4 w-1/2 p-2 focus:outline-none focus:lg:w-1/2 duration-300 border-[#dadde0]' />
      <ul className='hidden md:flex'>
        <Link to='/'>
          <li className='p-4'>Home</li>
        </Link>
        <Link to='/games'>
          <li className='p-4'>Browse Games</li>
        </Link>
        <li className='p-4'>About</li>
      </ul>
      <div className="flex flex-end hidden md:flex">
        <div className="flex flex-row justify-end gap-x-5 p-4">
          <div className="text-white font-bold p-4">Sign in</div>
          <div className="p-3">
            <Link to='/cart'>
              <img src={cart} alt="cart" className="w-8 h-8" />
              <span>{gamesInCart.length}</span>
            </Link>
          </div>
        </div>
      </div>
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
        <li className='p-4 border-b border-gray-600 font-bold'>Sign In</li>
        <li className='p-4 border-b border-gray-600'>
          <Link to='/cart'>
            <img src={cart} alt="cart" className="w-8 h-8" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarTest;