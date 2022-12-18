import React from 'react'
import HomeSlider from '../components/HomeSlider';
import GameRow from '../components/GameRow';


const Home = () => {
  return (
    <div>
      <HomeSlider />
      <GameRow title='Popular' />
      <GameRow title='Upcoming' />
      <GameRow title='New Releases' />
    </div>
  )
}

export default Home