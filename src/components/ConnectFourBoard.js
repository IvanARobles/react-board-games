import React from 'react'
import ConnectFourColumn from './ConnectFourColumn'

export default function ConnectFourBoard({ playerOneChar, playerTwoChar, setWinner, c4Tiles, setC4Tiles, playerOneTurn, setPlayerOneTurn }) {

    let nextTurnClass = 'error'
    let gridClass = 'connect-four-grid'
    if (playerOneTurn) {
      nextTurnClass = `player-icon ${playerOneChar.toLowerCase()}`
      gridClass = `connect-four-grid ${playerOneChar.toLowerCase()}`
    } else {
      nextTurnClass = `player-icon ${playerTwoChar.toLowerCase()}`
      gridClass = `connect-four-grid ${playerTwoChar.toLowerCase()}`
    }
    
    return (
      <div className='board-and-turn c4'>
        <div
          className={gridClass}
        >
          <ConnectFourColumn c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={0} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
          <ConnectFourColumn c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={1} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
          <ConnectFourColumn c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={2} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
          <ConnectFourColumn c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={3} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
          <ConnectFourColumn c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={4} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
          <ConnectFourColumn c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={5} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
          <ConnectFourColumn c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={6} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
        </div>
        <div className='player-info board'>
          <p>Next turn:</p>
          <div className={nextTurnClass}></div>
        </div>
      </div>
    )
}
