import React, { useState } from 'react'
import './App.css';
import Game from './components/Game.js'
import GameScroll from './components/GameScroll';
import GameHeader from './components/GameHeader';

function App() {

  // List of objects to determine which game is selected
  // Ensure only home is initialized to true
  const [gameSelect, setGameSelect] = useState([
    {
      id: 0,
      name: 'Home',
      selected: true
    },
    {
      id: 1,
      name: 'Tic-Tac-Toe',
      selected: false
    },
    {
      id: 2,
      name: 'Checkers',
      selected: false
    },
    // {
    //   id: 3,
    //   name: 'Chess',
    //   selected: false
    // }
  ])
  
  let [themeSelect, setThemeSelect] = useState('')
  let [playerOneChar, setPlayerOneChar] = useState('')
  let [playerTwoChar, setPlayerTwoChar] = useState('')
  let [winner, setWinner] = useState('')
  let [tiles, setTiles] = useState(['','','','','','','','',''])
  let [playerOneTurn, setPlayerOneTurn] = useState(true)

  let pageClass
  if (themeSelect === '') pageClass = 'entire-page'
  // if (playerTwoChar === '') pageClass = 'entire-page'   ---- If I want theme look to take affect after picking characters
  else pageClass = `entire-page ${themeSelect.toLowerCase()}`

  return (
    <div className={pageClass}>
      {!gameSelect.find(opt => opt.name === 'Home').selected && 
        <GameHeader gameSelect={gameSelect}/>}
      <Game gameSelect={gameSelect} 
        setGameSelect={setGameSelect} 
        themeSelect={themeSelect}
        setThemeSelect={setThemeSelect}
        playerOneChar={playerOneChar}
        playerTwoChar={playerTwoChar}
        playerOneTurn={playerOneTurn}
        setPlayerOneTurn={setPlayerOneTurn}
        setPlayerOneChar={setPlayerOneChar}
        setPlayerTwoChar={setPlayerTwoChar}
        winner={winner}
        setWinner={setWinner}
        tiles={tiles}
        setTiles={setTiles}/>
      {!gameSelect.find(opt => opt.name === 'Home').selected && 
        <GameScroll 
          gameSelect={gameSelect} 
          setGameSelect={setGameSelect}
          setPlayerOneTurn={setPlayerOneTurn}
          setThemeSelect={setThemeSelect}
          setPlayerOneChar={setPlayerOneChar}
          setPlayerTwoChar={setPlayerTwoChar}
          setTiles={setTiles}/>}
    </div> 
  );
}

export default App;