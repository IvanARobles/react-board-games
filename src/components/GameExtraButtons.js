import React from 'react'

export default function GameExtraButtons({ setTiles, setC4Tiles, setPlayerOneTurn, setThemeSelect, setPlayerOneChar, setPlayerTwoChar, setRules, selectedGame }) {

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
