import React from 'react'
import TicTacToeTile from './TicTacToeTile'

export default function TicTacToeBoard({ playerOneChar, playerTwoChar, setWinner, tiles, setTiles, playerOneTurn, setPlayerOneTurn }) {

  let nextTurnClass = 'error'
  let playerOneClass = `player-icon ${playerOneChar.toLowerCase()}`
  let playerTwoClass = `player-icon ${playerTwoChar.toLowerCase()}`
  if (playerOneTurn) {
    nextTurnClass = playerOneClass
  } else {
    nextTurnClass = playerTwoClass
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
      <div className='player-info'>
        <p>Next turn:</p>
        <div className={nextTurnClass}></div>
      </div>
    </div>
  )
}
