import React, { useEffect } from 'react'
import ReversiTile from './ReversiTile'

export default function ReversiBoard({ 
    revTiles, 
    setRevTiles, 
    playerOneTurn, 
    setPlayerOneTurn,  
    playerOneChar, 
    playerTwoChar, 
    setWinner,
    revTileCount,
    setRevTileCount,
    setWinnerCount
 }) {

  let nextTurnClass = 'error'
  let playerOneClass = `player-icon ${playerOneChar.toLowerCase()}`
  let playerTwoClass = `player-icon ${playerTwoChar.toLowerCase()}`
  if (playerOneTurn) {
    nextTurnClass = playerOneClass
  } else {
    nextTurnClass = playerTwoClass
  }

// Set middle pieces once the characters have been chosen
  useEffect(() => {
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
  }, [playerOneChar, playerTwoChar])

  function handleSkipTurn() {
    setPlayerOneTurn(!playerOneTurn)
  }

/***** Function to end the game early or if no player can make a move *****/
  function handleEndGame() {
    let pOneCount = 0, pTwoCount = 0
    for (let i = 0; i < revTiles.length; i++) {
      for (let j = 0; j < revTiles[0].length; j++) {
        if (revTiles[i][j] === playerOneChar.toLowerCase()) pOneCount++
        else if (revTiles[i][j] === playerTwoChar.toLowerCase()) pTwoCount++
      }
    }
    if (pOneCount > pTwoCount) {
      setWinner('Player One')
      setWinnerCount(pOneCount)
    }
    else if (pOneCount < pTwoCount) {
      setWinner('Player Two')
      setWinnerCount(pTwoCount)
    }
    else {
      setWinner('Tie')
      setWinnerCount(pOneCount)
    }
  }

  return (
    <div className='board-and-turn'>
      <div
        className='reversi-grid'
      >
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={0} colIdx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={0} colIdx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={0} colIdx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={0} colIdx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={0} colIdx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={0} colIdx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={0} colIdx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={0} colIdx={7} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={1} colIdx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={1} colIdx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={1} colIdx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={1} colIdx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={1} colIdx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={1} colIdx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={1} colIdx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={1} colIdx={7} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={2} colIdx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={2} colIdx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={2} colIdx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={2} colIdx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={2} colIdx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={2} colIdx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={2} colIdx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={2} colIdx={7} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={3} colIdx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={3} colIdx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={3} colIdx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={3} colIdx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={3} colIdx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={3} colIdx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={3} colIdx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={3} colIdx={7} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={4} colIdx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={4} colIdx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={4} colIdx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={4} colIdx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={4} colIdx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={4} colIdx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={4} colIdx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={4} colIdx={7} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={5} colIdx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={5} colIdx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={5} colIdx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={5} colIdx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={5} colIdx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={5} colIdx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={5} colIdx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={5} colIdx={7} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={6} colIdx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={6} colIdx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={6} colIdx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={6} colIdx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={6} colIdx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={6} colIdx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={6} colIdx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={6} colIdx={7} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={7} colIdx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={7} colIdx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={7} colIdx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={7} colIdx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={7} colIdx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={7} colIdx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={7} colIdx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>
      <ReversiTile revTiles={revTiles} setRevTiles={setRevTiles} rowIdx={7} colIdx={7} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner} revTileCount={revTileCount} setRevTileCount={setRevTileCount} setWinnerCount={setWinnerCount}/>

      </div>
      <div className='reversi-bottom'>
        <div className='player-info'>
          <p>Next turn:</p>
          <div className={nextTurnClass}></div>
        </div>
        <button 
          onClick={handleSkipTurn}
          className='extra-game-button'
          title='Skip Turn'
        >
          Skip
        </button>
        <button 
          onClick={handleEndGame}
          className='extra-game-button'
          title='End Game'
        >
          End
        </button>
      </div>
    </div>
  )
}
