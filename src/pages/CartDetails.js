import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext'

const CartDetails = () => {
  const { gamesInCart } = useContext(GameContext);
  const [gamesInCartInfo, setGamesInCartInfo] = useState([]);
  

  useEffect(() => {
    const uniqueGames = [...new Set(gamesInCart)];
    console.log(uniqueGames);
    console.log(gamesInCart);
      // console.log("Fetch" + i);
      fetch("http://localhost:8000/games/fetchGameByID?game_ids=[" + uniqueGames +"]")
        .then(resp => resp.json())
        .then(data => {
          console.log(data.data);
          setGamesInCartInfo(data.data);
        })
        

    // uniqueGames.forEach((game_id, index) => {
    //   console.log("Fetch" + index);
    //   fetch("http://localhost:8000/games/fetchGameByID?game_id=" + game_id)
    //     .then(resp => resp.json())
    //     .then(data => { console.log(data.data[0]);
    //       setGamesInCartInfo(prevState => [...prevState, data.data[0]]);
    //       // setGamesInCartInfo(data.data?.map(response => response.data.data))
    //     })
    // })
  }, [gamesInCart]);  

  // console.log(gamesInCartInfo);

  return (
    <div>
      {/* {!gamesInCart.length && (
        <div>no products in your shopping cart</div>
      )} */}
      {gamesInCartInfo?.map(gameInfo => {
        // const amount = gamesInCart.filter(function checkID(id){ return id === gameInfo.id})
        console.log(gameInfo?.id);
        return (
          <div className="flex mb-5 items-center" key={gameInfo.id}>
            <div className="bg-gray-100 p-3 rounded-xl shrink-0" style={{ boxShadow: 'inset 1px 0px 10px 10px rgba(0,0,0,0.1)' }}>
              <img className="w-24" src={gameInfo.game_image} alt="" />
            </div>
            <div className="pl-4 items-center">
              <h3 className="font-bold text-lg">{gameInfo.game_name}</h3>
              {/* <p className="text-sm leading-4 text-gray-500">{productInfo.description}</p> */}
              <div className="flex mt-1">
                <div className="grow font-bold">59.99</div>
                <div>
                  {/* <button onClick={() => lessOfThisProduct(productInfo._id)} className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>*/}
                  {/* <span className="px-2">
                {gamesInCart.filter(item => item === gameInfo.id).length}
              </span> */}
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