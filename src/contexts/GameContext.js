import { createContext } from "react";
import { useState } from "react";

export const GameContext = createContext({});

export function GameContextProvider({children}) {
    const [gamesInCart, setGamesInCart] = useState([]);
  return (
    <GameContext.Provider value={{gamesInCart, setGamesInCart}}>
      {children}
    </GameContext.Provider>
  )
}