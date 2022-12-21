import React from 'react'

export default function GameScroll({ gameSelect, setGameSelect, setTiles, setC4Tiles, setPlayerOneTurn, setThemeSelect, setPlayerOneChar, setPlayerTwoChar, setWinner }) {
  
  function handlePrevSelect(e) {
    let gameSelectCopy = [...gameSelect]
    let currSelectedCopy = gameSelectCopy.find(opt => opt.selected)
    currSelectedCopy.selected = false
    let nowSelectedCopy = gameSelectCopy.find(opt => opt.id === (currSelectedCopy.id - 1));
    nowSelectedCopy.selected = true
    handleReset()
    setGameSelect(gameSelectCopy)
  }
  
  function handleNextSelect(e) {
    let gameSelectCopy = [...gameSelect]
    let currSelectedCopy = gameSelectCopy.find(opt => opt.selected)
    currSelectedCopy.selected = false
    let nowSelectedCopy = gameSelectCopy.find(opt => opt.id === (currSelectedCopy.id + 1));
    nowSelectedCopy.selected = true
    handleReset()
    setGameSelect(gameSelectCopy)
  }

  function handleReset() {
    setWinner('')
    setPlayerOneTurn(true)
    setThemeSelect('')
    setPlayerOneChar('')
    setPlayerTwoChar('')
    if (currSelected.name === 'Tic-Tac-Toe') {
      setTiles(['','','','','','','','',''])
    }
    else if (currSelected.name === 'Connect-Four') {
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

  let currentId
  let prevSelect = null, nextSelect = null
  let currSelected = gameSelect.find(opt => opt.selected)
  if (currSelected != null) {
    currentId = currSelected.id
    prevSelect = gameSelect.find(opt => opt.id === (currentId - 1));
    nextSelect = gameSelect.find(opt => opt.id === (currentId + 1));
  }
  
  return (
    <div className='scroll-game-buttons-wrapper'>
        {prevSelect && <button 
          onClick={handlePrevSelect}
          className='scroll-game-button-prev'
        >
          {prevSelect.name}
        </button>}
        {nextSelect && <button 
          onClick={handleNextSelect}
          className='scroll-game-button-next'
        >
          {nextSelect.name}
        </button>}
      </div>
  )
}
