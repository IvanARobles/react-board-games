import React from 'react'

export default function PlayerInfo({ playerOneChar, playerTwoChar }) {
  let playerOneClass = `player-icon ${playerOneChar.toLowerCase()}`
  let playerTwoClass = `player-icon ${playerTwoChar.toLowerCase()}`
  return (
    <div className='player-info-wrapper'>
      <div className='player-info'>
        <p>Player One: </p>
        <div className={playerOneClass}></div>
      </div>
      <div className='player-info'>
        <p>Player Two: </p>
        <div className={playerTwoClass}></div>
      </div>
    </div>
  )
}
