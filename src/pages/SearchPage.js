import React from 'react'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';

const SearchPage = () => {

    const { state } = useLocation();
    console.log(state);

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between p-10 duration:500'>
                <div className='flex'>
                    <h1 className='text-white text-4xl font-bold'>Search Results for:</h1>
                </div>
                <div className='flex px-10 py-1'>
                    <h1 className='text-white text-3xl font-bold'>{state.searchParam}</h1>
                </div>
            </div>
            <motion.div layout>
                <div className="grid grid-cols-1 gap-y-4 md:grid-cols-1 lg:grid-cols-4 gap-3 md:gap-1 lg:gap-4 m-20">
                    {state?.searchResults.map((game, id) => (
                        <GameCard key={id} game={game} />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default SearchPage