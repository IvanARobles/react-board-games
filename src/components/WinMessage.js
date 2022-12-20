import React from 'react'

export default function WinMessage({ winner, setWinner, setTiles, setPlayerOneTurn, setThemeSelect, setPlayerOneChar, setPlayerTwoChar, gameSelect, setGameSelect }) {

  function handleRestartGame() {
    setWinner('')
    setTiles(['','','','','','','','',''])
    setPlayerOneTurn(true)
  }

  function handleRepickTheme() {
    setThemeSelect('')
    setPlayerOneChar('')
    setPlayerTwoChar('')
    handleRestartGame()
  }

  function handleReturnHome() {
    handleRepickTheme()
    handleRestartGame()
    let gameSelectCopy = [...gameSelect]
    let currSelectedCopy = gameSelectCopy.find(opt => opt.selected)
    let nowSelectedCopy = gameSelectCopy.find(opt => opt.name === 'Home')
    currSelectedCopy.selected = false
    nowSelectedCopy.selected = true
    setGameSelect(gameSelectCopy)
  }
  return (
    <>
      <section className='win-message-blocker'>
        <div className='win-message-box'>
          {winner === 'Tie' && <h3>It's a Tie!</h3>}
          {winner !== 'Tie' && <h3>{winner} Wins!</h3>}
          <div className='win-buttons'>
        <button 
          onClick={handleRestartGame}
          className='modal-button'
          title='Restart Game'
        >
          Restart
        </button>
        <button 
          onClick={handleRepickTheme}
          className='modal-button'
          title='Pick Theme and Characters'
        >
          Re-pick
        </button>
        <button 
          onClick={handleReturnHome}
          className='modal-button'
          title='Return Home'
        >
          Home
        </button>
          </div>
        </div>
      </section>
      
    </>
  )
}
