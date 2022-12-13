import React from 'react'
import { GameContext } from '../contexts/GameContext'

const CartDetails = () => {
  const {gamesInCart} = React.useContext(GameContext);
  console.log(gamesInCart);
  
  return (
    <div>CartDetails</div>
  )
}

export default CartDetails;