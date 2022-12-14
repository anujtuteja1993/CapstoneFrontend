import React from 'react'
import { useState, useEffect } from 'react';
import Game from './Game';

const GameRow = ({title}) => {

    const [games, setGames] = useState([])

    useEffect(() => {
        fetchGames();
    }, [])

    const fetchGames = () => {
        fetch('http://localhost:8000/games/getTenGameDetails')
          .then(resp => resp.json())
          .then(( { data } ) => {
            setGames(data);
        });
      }

  return (
    <div className='py-5'>
    <div className='text-white text-2xl font-bold px-2'>{title}</div>
    <div className='relative flex items-center'>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {games.map((game, id) => (
                <Game key={id} game={game} />
            ))}
        </div>
    </div>
    </div>
  )
}

export default GameRow;