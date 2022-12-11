import React, { useState } from 'react'
import { useEffect } from 'react'
import Slider from './Slider'

function HomeSlider() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = () => {
    fetch('http://localhost:8000/games/getTenGameDetails')
      .then(resp => resp.json())
      .then(({ data }) => {
        setGames(data);
      });
  }

  console.log(games);

  let gameImages = [];
  games.forEach(game => {
    gameImages.push(game.game_image)
  });

  return (
    <div className="flex flex-row py-10 ">
      <div className="relative m-auto w-[82vw] overflow-hidden rounded-xl aspect-video ">
        <Slider games={gameImages} />
      </div>
    </div>
  )
}


export default HomeSlider;
