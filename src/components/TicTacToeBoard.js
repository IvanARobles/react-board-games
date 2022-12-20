import React, { useState } from 'react'
import TicTacToeTile from './TicTacToeTile'

export default function TicTacToeBoard({ playerOneChar, playerTwoChar, setWinner, tiles, setTiles, playerOneTurn, setPlayerOneTurn }) {

  let nextTurn = 'error'
  if (playerOneTurn) {
    nextTurn = 'Player One'
  } else {
    nextTurn = 'Player Two'
  }
  
  return (
    <div className='board-and-turn'>
      <div
        className='tic-tac-toe-grid'
      >
        <TicTacToeTile tiles={tiles} setTiles={setTiles} idx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
        <TicTacToeTile tiles={tiles} setTiles={setTiles} idx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
        <TicTacToeTile tiles={tiles} setTiles={setTiles} idx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
        <TicTacToeTile tiles={tiles} setTiles={setTiles} idx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
        <TicTacToeTile tiles={tiles} setTiles={setTiles} idx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
        <TicTacToeTile tiles={tiles} setTiles={setTiles} idx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
        <TicTacToeTile tiles={tiles} setTiles={setTiles} idx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
        <TicTacToeTile tiles={tiles} setTiles={setTiles} idx={7} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
        <TicTacToeTile tiles={tiles} setTiles={setTiles} idx={8} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>

      </div>
      <p>Next turn: {nextTurn}</p>
    </div>
  )
}
