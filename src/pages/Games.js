import React from 'react'
import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import Game from '../components/Game'


const Games = () => {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames();
  }, [])

  const fetchGames = () => {
    fetch('http://localhost:8000/games/getTenGameDetails')
      .then(resp => resp.json())
      .then(({ data }) => {
        setGames(data);
      });
  }

  return (
    <div className='flex flex-row py-10'>
      {games.map((game) => (
        <div className='flex relative'>
      <Game key={game.id} game={game}/>
      </div>
      ))}
      </div>
  )
}

export default Games;