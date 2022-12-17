import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext'



function CartDetailsTest() {
  const { gamesInCart } = useContext(GameContext);
  const [gamesInCartInfo, setGamesInCartInfo] = useState([]);

  useEffect(() => {
    const uniqueGames = [...new Set(gamesInCart)];
    const gameMap = new Map();

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
              {/* <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Home</p>
                                    </div> */}
              <p className="text-5xl font-black leading-10 text-white pt-3">Cart</p>
              {!gamesInCart.length && (
                <div>no products in your shopping cart</div>
              )} {!gamesInCart.length && (
                <div>no products in your shopping cart</div>
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
                        <div className="text-white py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                          <span>{gameInfo.quantity}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-red-500 cursor-pointer">Remove</p>
                        </div>
                        <p className="text-base font-black leading-none text-white">$59.99</p>
                      </div>
                    </div>
                  </div>)
              })}
            </div>
            <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-[#282929]/50 h-full rounded-r-xl">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-white">Summary</p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-white">Subtotal</p>
                    <p className="text-base leading-none text-white">$9,000</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-white">Total</p>
                    <p className="text-2xl font-bold leading-normal text-right text-white">$10,240</p>
                  </div>
                  <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                    Checkout
                  </button>
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
