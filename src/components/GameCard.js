import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const GameCard = ({ game }) => {

    return (
        <Link to={`/games/${game.id}`}>
            <motion.div layout>
                <div className='sm:w-50 md:w-100 lg:w-90 inline-block cursor-pointer relative p-2 mb-4'>
                    <img className='cursor-pointer w-full block h-[28vh] rounded-xl' src={game.game_image} alt={game.game_name}></img>
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-xl'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex flex-col justify-center items-center h-full text-center'>{game?.game_name}
                        </p>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default GameCard;