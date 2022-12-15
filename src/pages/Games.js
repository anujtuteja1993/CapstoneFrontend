import React from 'react'
import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import FilterGames from '../components/FilterGames'
import { motion } from 'framer-motion'


const Games = () => {

  const [games, setGames] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState("Action");

  const fetchGames = () => {
    fetch('http://localhost:8000/games/getGamesByGenre?genres=["Action","Adventure","RPG", "Racing", "Shooter", "Fighting", "Strategy", "Platformer"]')
      .then(resp => resp.json())
      .then(({ data }) => {
        setGames(data);
        const filtered = data.filter(game => game.genre_name.includes(activeGenre));
        setFiltered(filtered);
      });
  }

  useEffect(() => {
    fetchGames();
  }, [])

 

  return (
    <div>
      <FilterGames allGames={games} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-1 lg:grid-cols-4 gap-3 md:gap-1 lg:gap-4 m-20">
          {filtered.map((game, id) => (
            <GameCard key={id} game={game} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Games;