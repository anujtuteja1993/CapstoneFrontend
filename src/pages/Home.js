import React from 'react'
import { useState, useEffect} from 'react';
import HomeSlider from '../components/HomeSlider';
import GameRow from '../components/GameRow';


const Home = () => {

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch('http://localhost:8000/games/getCriticallyAcclaimedGames')
      .then(resp => resp.json())
      .then(({ data }) => {
        setGames(data);
      });
  }
  
  useEffect(() => {
    fetchGames();
  }, [])

  return (
    <div>
      <HomeSlider />
      <GameRow title='Popular' games={games} />
      <GameRow title='Upcoming' games={games} />
      <GameRow title='New Releases' games={games}/>
    </div>
  )
}

export default Home