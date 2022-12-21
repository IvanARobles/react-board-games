import React, { useState } from 'react'
import logo from '../images/board-games-title.png'
import ThemeSelect from './ThemeSelect'
import PlayerInfo from './PlayerInfo'
import TicTacToeBoard from './TicTacToeBoard'
import GameExtraButtons from './GameExtraButtons'
import WinMessage from './WinMessage'
import RulesDisplay from './RulesDisplay'
import ConnectFourBoard from './ConnectFourBoard'

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
    setTiles,
    c4Tiles,
    setC4Tiles
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

  let buttonNames = []
  gameSelect.forEach(game => {
    if (game.name !== 'Home') buttonNames.push(game.name)
  }) 

  return (
    <>
      {gameCurrentlySelected === 'Home' && <div className={gameClassName}>
        <img alt='Ivan Robles Cartoon-Themed Board Games'
          src={logo}
          className='main-logo'
        />
        <div className='home-game-buttons'>
          {buttonNames.map(btn => {
            let theKey = `${btn}-button-key`
            let theTitle = `Play ${btn}!`
            return (
              <button className='home-game-button'
                key={theKey}
                value={btn}
                title={theTitle}
                onClick={handleGamePicked}>{btn}</button>)
          })}
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
          setTiles={setTiles}
          setC4Tiles={setC4Tiles}
          playerOneChar={playerOneChar}
          playerTwoChar={playerTwoChar}/>}
        {rules !== '' && <RulesDisplay selectedGame={gameCurrentlySelected} setRules={setRules} />}

        <GameExtraButtons 
          setPlayerOneTurn={setPlayerOneTurn}
          setThemeSelect={setThemeSelect}
          setPlayerOneChar={setPlayerOneChar}
          setPlayerTwoChar={setPlayerTwoChar}
          tiles={tiles}
          setTiles={setTiles}
          setC4Tiles={setC4Tiles}
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
        {gameCurrentlySelected === 'Connect-Four' && <ConnectFourBoard 
          playerOneChar={playerOneChar} 
          playerTwoChar={playerTwoChar}
          playerOneTurn={playerOneTurn}
          setPlayerOneTurn={setPlayerOneTurn}
          setWinner={setWinner}
          c4Tiles={c4Tiles}
          setC4Tiles={setC4Tiles}/>}
        <PlayerInfo 
          playerOneChar={playerOneChar}
          playerTwoChar={playerTwoChar}/>

      </div>}
      
    </>
  )
}
