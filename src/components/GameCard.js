import React from 'react'

const GameCard = ({game}) => {
  return (
    <div>
        <h2>{game.game_name}</h2>
        <img src={game.game_image} alt={game.game_name}></img>
    </div>
  )
}

export default GameCard;