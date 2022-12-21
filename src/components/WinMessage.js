import React from 'react'

export default function WinMessage({ 
    winner, 
    setWinner, 
    setTiles, 
    setC4Tiles,
    setPlayerOneTurn, 
    setThemeSelect, 
    setPlayerOneChar, 
    setPlayerTwoChar, 
    gameSelect, 
    setGameSelect,
    playerOneChar,
    playerTwoChar }) {

  function handleRestartGame() {
    if (gameSelect.find(opt => opt.selected).name === 'Tic-Tac-Toe') {
      setTiles(['','','','','','','','',''])
    }
    else if (gameSelect.find(opt => opt.selected).name === 'Connect-Four') {
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
      setWinner('')
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

  function handlePeek() {
    document.querySelector('.win-message-blocker').classList.add('peek')
    setTimeout(function(){
        document.querySelector('.win-message-blocker').classList.remove('peek')
    }, 4000)
  }

  let playerOneClass = `player-icon bordered ${playerOneChar.toLowerCase()}`
  let playerTwoClass = `player-icon bordered ${playerTwoChar.toLowerCase()}`
  let winnerClass = 'error'
  if (winner === 'Player One') {
    winnerClass = playerOneClass
  } else {
    winnerClass = playerTwoClass
  }
  return (
    <>
      <section className='win-message-blocker'>
        <div className='win-message-box'>
          {winner === 'Tie' && <h2>It's a Draw!</h2>}
          {winner !== 'Tie' && <div className='winner-info'>
            <div className={winnerClass}></div>
            <h2>Wins!</h2>
          </div>}
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
        <button 
          onClick={handlePeek}
          className='modal-button'
          title='Quickly View Board'
        >
          Review Board
        </button>
          </div>
        </div>
      </section>
      
    </>
  )
}
