import React, { useState } from 'react'
import logo from '../images/board-games-title.png'
import ThemeSelect from './ThemeSelect'
import PlayerInfo from './PlayerInfo'
import TicTacToeBoard from './TicTacToeBoard'
import GameExtraButtons from './GameExtraButtons'
import WinMessage from './WinMessage'
import RulesDisplay from './RulesDisplay'

export default function Game({ 
    gameSelect, 
    setGameSelect, 
    themeSelect,
    setThemeSelect,
    playerOneChar,
    setPlayerOneChar,
    playerTwoChar,
    setPlayerTwoChar,
    playerOneTurn,
    setPlayerOneTurn,
    winner,
    setWinner,
    tiles,
    setTiles
}) {

  function handleGamePicked(e) {
    let gameSelectCopy = [...gameSelect]
    let currSelectedCopy = gameSelectCopy.find(opt => opt.selected)
    let nowSelectedCopy = gameSelectCopy.find(opt => opt.name === e.target.value)
    currSelectedCopy.selected = false
    nowSelectedCopy.selected = true
    setGameSelect(gameSelectCopy)
  }

  let gameClassName = 'game-section'
  let gameCurrentlySelected = gameSelect.find(opt => opt.selected).name
  if (gameCurrentlySelected === 'Home') gameClassName += '-home'
  let [rules, setRules] = useState('')

  const possibleThemes = [
    {
      theme: 'Spongebob',
      characters: [
        'Spongebob',
        'Patrick',
        'MrKrabs',
        'Squidward',
        'Plankton',
        'Sandy'
      ]
    },
    {
      theme: 'Marvel',
      characters: [
        'SpiderMan',
        'Venom', 
        'Hulk',
        'SpiderGwen',
        'Wolverine',
        'CaptainAmerica'
      ]
    },
    {
      theme: 'Pokemon',
      characters: [
        'Charmander',
        'Squirtle', 
        'Bulbasaur',
        'Pikachu',
        'Mewtwo',
        'Lucario'
      ]
    }

  ]

  return (
    <>
      {gameCurrentlySelected === 'Home' && <div className={gameClassName}>
        <img 
          src={logo}
          className='main-logo'
        />
        <div className='home-game-buttons'>
          <button className='home-game-button'
            value='Tic-Tac-Toe'
            onClick={handleGamePicked}>Tic-Tac-Toe</button>
          <button className='home-game-button'
            value='Checkers'
            onClick={handleGamePicked}>Checkers</button>
          {/* <button className='home-game-button'
            value='Chess'
            onClick={handleGamePicked}>Chess</button> */}
        </div>
      </div>}
      {gameCurrentlySelected === 'Checkers' && 
        <div className='construction-message'>
        <div>Under Construction...</div>
      </div>}
      {gameCurrentlySelected === 'Chess' && 
        <div className='construction-message'>
        <div>Under Construction...</div>
      </div>}
      {gameCurrentlySelected !== 'Home' && 
        gameCurrentlySelected !== 'Checkers' &&
        gameCurrentlySelected !== 'Chess' &&
        <div className={gameClassName}>
        {playerTwoChar === '' && <ThemeSelect selectedGame={gameCurrentlySelected} 
          possibleThemes={possibleThemes}
          themeSelect={themeSelect}
          setThemeSelect={setThemeSelect}
          playerOneChar={playerOneChar}
          setPlayerOneChar={setPlayerOneChar}
          playerTwoChar={playerTwoChar}
          setPlayerTwoChar={setPlayerTwoChar}/>}
        {winner !== '' && <WinMessage 
          gameSelect={gameSelect}
          setGameSelect={setGameSelect}
          winner={winner}
          setWinner={setWinner}
          setPlayerOneTurn={setPlayerOneTurn}
          setThemeSelect={setThemeSelect}
          setPlayerOneChar={setPlayerOneChar}
          setPlayerTwoChar={setPlayerTwoChar}
          setTiles={setTiles}/>}
        {rules !== '' && <RulesDisplay selectedGame={gameCurrentlySelected} setRules={setRules} />}

        <GameExtraButtons 
          setPlayerOneTurn={setPlayerOneTurn}
          setThemeSelect={setThemeSelect}
          setPlayerOneChar={setPlayerOneChar}
          setPlayerTwoChar={setPlayerTwoChar}
          tiles={tiles}
          setTiles={setTiles}
          setRules={setRules}
          selectedGame={gameCurrentlySelected}/>
        {gameCurrentlySelected === 'Tic-Tac-Toe' && <TicTacToeBoard 
          playerOneChar={playerOneChar} 
          playerTwoChar={playerTwoChar}
          playerOneTurn={playerOneTurn}
          setPlayerOneTurn={setPlayerOneTurn}
          setWinner={setWinner}
          tiles={tiles}
          setTiles={setTiles}/>}
        <PlayerInfo 
          playerOneChar={playerOneChar}
          playerTwoChar={playerTwoChar}/>

      </div>}
      
    </>
  )
}
