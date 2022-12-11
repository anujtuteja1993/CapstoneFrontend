import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const Game = ({ game }) => {
    return (
        <Link to={`/games/${game.id}`}>
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:[280px] inline-block cursor-pointer relative p-2'>
            <img className="w-full h-auto block rounded" src={game.game_image} alt={game.game_name}></img>
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-md'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex flex-col justify-center items-center h-full text-center'>{game?.game_name}
                </p>
            </div>
        </div>
        </Link>
    )
}

export default Game;