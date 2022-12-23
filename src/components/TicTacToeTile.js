import React from 'react'

export default function TicTacToeTile({ tiles, setTiles, idx, playerOneTurn, setPlayerOneTurn,  playerOneChar, playerTwoChar, setWinner }) {

  function handleBoxClick(e) {
    let tilesCopy = [...tiles]
    if (playerOneTurn) {
      tilesCopy[idx] = playerOneChar.toLowerCase()
    //   e.target.className = `tic-tac-toe-box filled ${playerOneChar.toLowerCase()}`
    } else {
        tilesCopy[idx] = playerTwoChar.toLowerCase()
        // e.target.className = `tic-tac-toe-box filled ${playerTwoChar.toLowerCase()}`
    }
    setTiles(tilesCopy)
    setPlayerOneTurn(!playerOneTurn)
    checkOutcome(tilesCopy)
  }

  function checkOutcome(tilesCopy) {
    let winnerFound = false
    winningOutcomes.forEach(outcome => {
        // Exit if any of the spots are empty
        if (tilesCopy[outcome[0]] === '' ||
            tilesCopy[outcome[1]] === '' ||
            tilesCopy[outcome[2]] === '') return
        // If all three spots in the possibilites are the same, the player who just placed it won
        if (tilesCopy[outcome[0]] === tilesCopy[outcome[1]] && tilesCopy[outcome[1]] === tilesCopy[outcome[2]]) {
            if (playerOneTurn) setWinner('Player One') 
            else setWinner('Player Two')
            winnerFound = true;
            return
        }
    })
    if (winnerFound) return
    // If all spots filled and no winner has come up, it is a tie
    if (tilesCopy[0] !== '' &&
        tilesCopy[1] !== '' &&
        tilesCopy[2] !== '' &&
        tilesCopy[3] !== '' &&
        tilesCopy[4] !== '' &&
        tilesCopy[5] !== '' &&
        tilesCopy[6] !== '' &&
        tilesCopy[7] !== '' &&
        tilesCopy[8] !== '') {
            setWinner('Tie')
        }
  }

  let winningOutcomes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  // Set class based on the value inside, so clearing the state resets the classes always
  let tileClass 
  if (tiles[idx] === '') {
    tileClass = 'tic-tac-toe-box'
  } else {
    tileClass = `tic-tac-toe-box filled ${tiles[idx]}`
  }

  return (
    <div className={tileClass}
      onClick={handleBoxClick}
      title="Place Character Token"
    ></div>
  )
}
