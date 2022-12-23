import React from 'react'

export default function GameExtraButtons({ 
    setTiles, 
    setC4Tiles, 
    setRevTiles, 
    setRevTileCount,
    setWinnerCount,
    setPlayerOneTurn, 
    setThemeSelect, 
    setPlayerOneChar, 
    setPlayerTwoChar, 
    setRules, 
    selectedGame, 
    playerOneChar, 
    playerTwoChar }) {

  function handleRestartGame() {
    setPlayerOneTurn(true)
    if (selectedGame === 'Tic-Tac-Toe') {
      setTiles(['','','','','','','','',''])
    }
    else if (selectedGame === 'Connect-Four') {
      setC4Tiles([
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','','']
      ])
    } else if (selectedGame === 'Reversi') {
      setRevTiles([
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','',`${playerTwoChar.toLowerCase()}`,`${playerOneChar.toLowerCase()}`,'','',''],
        ['','','',`${playerOneChar.toLowerCase()}`,`${playerTwoChar.toLowerCase()}`,'','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
      ])
      setRevTileCount(4)
      setWinnerCount(0)
    }
  }

  

  function handleRepickTheme() {
    setThemeSelect('')
    setPlayerOneChar('')
    setPlayerTwoChar('')
    handleRestartGame()
  }

  function handleShowRules() {
    setRules({selectedGame})
  }

  return (
    <div className='extra-game-buttons-wrapper'>
        <button 
          onClick={handleRestartGame}
          className='extra-game-button'
          title='Restart Game'
        >
          Restart
        </button>
        <button 
          onClick={handleRepickTheme}
          className='extra-game-button'
          title='Pick Theme and Characters'
        >
          Select Theme
        </button>
        <button 
          onClick={handleShowRules}
          className='extra-game-button'
          title='See Game Rules'
        >
          Rules
        </button>
      </div>
  )
}
