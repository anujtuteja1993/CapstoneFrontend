import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext'

const CartDetails = () => {
  const { gamesInCart } = useContext(GameContext);
  const [gamesInCartInfo, setGamesInCartInfo] = useState([]);
  

  useEffect(() => {
    const uniqueGames = [...new Set(gamesInCart)];
    const gameMap= new Map();

    gamesInCart.forEach(element => {
      if(gameMap.has(element)){
        gameMap.set(element, gameMap.get(element)+1);
      }else{
        gameMap.set(element, 1);
      }
    });

      fetch("http://localhost:8000/games/fetchGameByID?game_ids=[" + uniqueGames +"]")
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
    <div>
      {!gamesInCart.length && (
        <div>no products in your shopping cart</div>
      )}
      {gamesInCartInfo?.map(gameInfo => {
        // const amount = gamesInCart.filter(function checkID(id){ return id === gameInfo.id})
        // console.log(gameInfo?.id);
        return (
          <div className="flex mb-5 items-center" key={gameInfo.id}>
            <div className="bg-gray-100 p-3 rounded-xl shrink-0" style={{ boxShadow: 'inset 1px 0px 10px 10px rgba(0,0,0,0.1)' }}>
              <img className="w-24" src={gameInfo.game_image} alt="" />
            </div>
            <div className="pl-4 items-center">
              <h3 className="font-bold text-lg">{gameInfo.game_name}</h3>
              <div className="flex mt-1">
                <div className="grow font-bold">59.99</div>
                <div>
                  {/* <button onClick={() => lessOfThisProduct(productInfo._id)} className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>*/}
                  <span className="px-2">
                {gameInfo.quantity}
              </span>
                  {/* <button onClick={() => moreOfThisProduct(productInfo._id)} className="bg-emerald-500 px-2 rounded-lg text-white">+</button>  */}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
 
  )
}

export default CartDetails;