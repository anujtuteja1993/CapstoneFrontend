import React, { useEffect } from 'react'

const FilterGames = ({setActiveGenre, activeGenre, setFiltered, allGames}) => {

useEffect(() => {
    //  if (activeGenre === 'All') {
    //     setFiltered(allGames);
    //     return; 
    //  }

     const filtered = allGames.filter(game => game.genre_name.includes(activeGenre));
     setFiltered(filtered);
}, [activeGenre])

    return (
        <div className='p-10 flex justify-center'>
            <button onClick={() => setActiveGenre('Action')} className='mr-8 min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Action</button>
            <button onClick={() => setActiveGenre('Adventure')} className='mr-8 min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Adventure</button>
            <button onClick={() => setActiveGenre('Racing')} className='mr-8 min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Racing</button>
            <button onClick={() => setActiveGenre('Shooter')} className='mr-8 min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Shooter</button>
            <button onClick={() => setActiveGenre('Fighting')} className='mr-8 min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Fighting</button>
            <button onClick={() => setActiveGenre('Strategy')} className='mr-8 min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Strategy</button>
            <button onClick={() => setActiveGenre('Platformer')} className='mr-8 min-w-[5rem] font-bold px-[0.5rem] py-[1rem] border bg-none hover:bg-[#0c2b45] rounded-xl text-white'>Platformer</button>
            
        </div>
    )
}

export default FilterGames;