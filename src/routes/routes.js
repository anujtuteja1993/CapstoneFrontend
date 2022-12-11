import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import GameDetails from '../pages/GameDetails';
import Games from '../pages/Games';
import Test from '../pages/Test';

export const AppRoutes = (props) => {
  return (

    <Routes>
        <Route exact path='/' element={<Home {...props} />} />
        
        <Route exact path='/games/:id/' element={<GameDetails {...props} />} />
        <Route exact path='/games' element={<Games {...props} />} />
        <Route exact path='/test' element={<Test {...props} />} />

        {/* <Route exact path='/gamedetail' element={<GameDetail {...props} />} /> */}
</Routes>
  )
}