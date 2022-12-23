import React from 'react'

export default function ConnectFourTile({ c4Tiles, setC4Tiles, idx, colIdx, playerOneTurn, setPlayerOneTurn,  playerOneChar, playerTwoChar, setWinner }) {

    // Set class based on the value inside, so clearing the state resets the classes always
    let tileClass 
    if (idx === 0) {
      tileClass = 'connect-four-top-box'
    }
    else if (c4Tiles[colIdx][idx] === '') {
      tileClass = 'connect-four-box'
    } else {
      tileClass = `connect-four-box filled ${c4Tiles[colIdx][idx]}`
    }
    
    return (
      <div className={tileClass}></div>
    )
}
