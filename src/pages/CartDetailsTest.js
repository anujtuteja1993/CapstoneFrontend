import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext'
import { Link } from "react-router-dom";



function CartDetailsTest() {
  const { gamesInCart, setGamesInCart } = useContext(GameContext);
  const [gamesInCartInfo, setGamesInCartInfo] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const incrementCartProduct = (id) => {
    let tempArr = [...gamesInCart];
    tempArr.push(`${id}`);
    setGamesInCart(tempArr);
  }

  const decrementCartProduct = (id) => {
    const pos = gamesInCart.indexOf(id);
    let tempArr = [...gamesInCart];
    tempArr.splice(pos, 1);
    setGamesInCart(tempArr);
    console.log(gamesInCart);
  }

  const removeItemFromCart = (id) => {
    const pos = gamesInCart.indexOf(id);
    let tempArr = [...gamesInCart];
    tempArr.splice(pos, gamesInCart.filter(function checkID(id) { return id === id }).length);
    setGamesInCart(tempArr);
    console.log(gamesInCart);
  }

  let subTotal = 0;
  gamesInCartInfo.forEach(item => {
    subTotal += item.price * item.quantity;
  })

  let tax = subTotal * 0.15;
  let total = subTotal + tax;

  const checkOut = () => {
    if (isSignedIn) {
      alert("Thank you for your purchase!");
    } else {
      alert("Please sign in to complete your purchase.");
    }
  }
  
  useEffect(() => {
    const uniqueGames = [...new Set(gamesInCart)];
    const gameMap = new Map();

    if (localStorage.getItem('user')) {
      setIsSignedIn(true);
    }

    gamesInCart.forEach(element => {
      if (gameMap.has(element)) {
        gameMap.set(element, gameMap.get(element) + 1);
      } else {
        gameMap.set(element, 1);
      }
    });

    fetch("http://localhost:8000/games/fetchGameByID?game_ids=[" + uniqueGames + "]")
      .then(resp => resp.json())
      .then(data => {
        let tempArr = [];
        data.data.forEach((item, index) => {
          item.quantity = gameMap.get(`${item.id}`);
          tempArr.push(item);
        })
        setGamesInCartInfo(tempArr);
      })

  }, [gamesInCart]);

  return (
    <>
      <div className="w-full h-full top-0" id="chec-div">
        <div className="w-full absolute z-1 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
          <div className="flex md:flex-row flex-col justify-center" id="cart">
            <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-[#202121]/50 overflow-y-auto overflow-x-hidden h-screen rounded-l-xl" id="scroll">
              <p className="text-5xl font-black leading-10 text-white pt-3">Cart</p>
              {!gamesInCart.length && (
                <div className="py-10 text-3xl text-white">Your Cart is empty</div>
              )}
              {gamesInCartInfo?.map(gameInfo => {
                return (
                  <div className="md:flex items-center mt-14 py-8 border-t border-gray-200" key={gameInfo.id}>
                    <div className="w-1/4">
                      <img src={gameInfo.game_image} alt className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-xl font-bold leading-none text-white">{gameInfo.game_name}</p>
                        <div className="flex flex-row text-white py-1 px-1 mr-6 focus:outline-none">
                          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold p-2 rounded-lg" onClick={() => decrementCartProduct(gameInfo.id)}>-</button>
                          <p className="p-2">{gameInfo.quantity}</p >
                          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold p-2 rounded-lg" onClick={() => incrementCartProduct(gameInfo.id)}>+</button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p onClick={() => removeItemFromCart(gameInfo.id)} className="text-xs leading-3 underline text-red-500 cursor-pointer">Remove</p>
                        </div>
                        <p className="text-base font-black leading-none text-white">${parseFloat(gameInfo.quantity * gameInfo.price).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>)
              })}
            </div>
            <div className="md:w-1/3 xl:w-1/4 w-full bg-[#282929]/50 h-full rounded-r-xl">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-white">Summary</p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-white">Subtotal</p>
                    <p className="text-base leading-none text-white">${parseFloat(subTotal).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-white">Tax</p>
                    <p className="text-base leading-none text-white">${parseFloat(tax).toFixed(2)}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-white">Total</p>
                    <p className="text-2xl font-bold leading-normal text-right text-white">${parseFloat(total).toFixed(2)}</p>
                  </div>
                  {isSignedIn ? (gamesInCart.length ? <button onClick={() => checkOut()} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Checkout </button> :
                    <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white" disabled>Checkout</button>) :
                    (
                      <Link to='/login'>
                        <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                          Sign in to Checkout</button>
                      </Link>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </>
  );
}

export default CartDetailsTest;
