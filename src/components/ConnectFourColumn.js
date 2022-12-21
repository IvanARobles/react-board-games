import React from 'react'
import ConnectFourTile from './ConnectFourTile'

export default function ConnectFourColumn({ c4Tiles, setC4Tiles, idx, playerOneTurn, setPlayerOneTurn,  playerOneChar, playerTwoChar, setWinner }) {

  function handleBoxClick(e) {
    // Find lowest tile not occupied
    let rowIdx;
    for (let i = 6; i >= 0; i--) {
      if (c4Tiles[idx][i] === '') {
        rowIdx = i;
        break
      }
    }
    if (rowIdx === 0) {
        console.log("full")
        return
    }
    let newTiles = [
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','','']
      ]
    // Create deep copy of tiles
    for (let i = 0; i < c4Tiles.length; i++) {
      for (let j = 0; j < c4Tiles[0].length; j++) {
        newTiles[i][j] = c4Tiles[i][j]
      }
    }
    if (playerOneTurn) {
      newTiles[idx][rowIdx] = playerOneChar.toLowerCase()
    } else {
      newTiles[idx][rowIdx] = playerTwoChar.toLowerCase()
    }
    setC4Tiles(newTiles)
    setPlayerOneTurn(!playerOneTurn)
    checkOutcome(newTiles)
  }

  function checkOutcome(tilesCopy) {
    let winnerFound = false
    winningOutcomes.forEach(outcome => {
        if (tilesCopy[outcome[0][0]][outcome[0][1]] === '' ||
            tilesCopy[outcome[1][0]][outcome[1][1]] === '' ||
            tilesCopy[outcome[2][0]][outcome[2][1]] === '' ||
            tilesCopy[outcome[3][0]][outcome[3][1]] === '') {
                return
        }
        if (tilesCopy[outcome[0][0]][outcome[0][1]] === tilesCopy[outcome[1][0]][outcome[1][1]] &&
            tilesCopy[outcome[1][0]][outcome[1][1]] === tilesCopy[outcome[2][0]][outcome[2][1]] &&
            tilesCopy[outcome[2][0]][outcome[2][1]] === tilesCopy[outcome[3][0]][outcome[3][1]]) {
              if (playerOneTurn) setWinner('Player One') 
              else setWinner('Player Two')
              winnerFound = true;
              return
        }
    })
    if (winnerFound) return
    // If the entire top row is filled and no winner has come up, it is a tie
    if (tilesCopy[0][1] !== '' &&
        tilesCopy[1][1] !== '' &&
        tilesCopy[2][1] !== '' &&
        tilesCopy[3][1] !== '' &&
        tilesCopy[4][1] !== '' &&
        tilesCopy[5][1] !== '' &&
        tilesCopy[6][1] !== '') {
            setWinner('Tie')
        }
  }

  // Large 3D Array holding coordinates for winning outcomes
  let winningOutcomes = [
    [[0, 1], [1, 1], [2, 1], [3, 1]],
    [[1, 1], [2, 1], [3, 1], [4, 1]],
    [[2, 1], [3, 1], [4, 1], [5, 1]],
    [[3, 1], [4, 1], [5, 1], [6, 1]], //First Row
    [[0, 2], [1, 2], [2, 2], [3, 2]],
    [[1, 2], [2, 2], [3, 2], [4, 2]],
    [[2, 2], [3, 2], [4, 2], [5, 2]],
    [[3, 2], [4, 2], [5, 2], [6, 2]], //2nd Row
    [[0, 3], [1, 3], [2, 3], [3, 3]],
    [[1, 3], [2, 3], [3, 3], [4, 3]],
    [[2, 3], [3, 3], [4, 3], [5, 3]],
    [[3, 3], [4, 3], [5, 3], [6, 3]], //3rd Row
    [[0, 4], [1, 4], [2, 4], [3, 4]],
    [[1, 4], [2, 4], [3, 4], [4, 4]],
    [[2, 4], [3, 4], [4, 4], [5, 4]],
    [[3, 4], [4, 4], [5, 4], [6, 4]], //4th Row
    [[0, 5], [1, 5], [2, 5], [3, 5]],
    [[1, 5], [2, 5], [3, 5], [4, 5]],
    [[2, 5], [3, 5], [4, 5], [5, 5]],
    [[3, 5], [4, 5], [5, 5], [6, 5]], //5th Row
    [[0, 6], [1, 6], [2, 6], [3, 6]],
    [[1, 6], [2, 6], [3, 6], [4, 6]],
    [[2, 6], [3, 6], [4, 6], [5, 6]],
    [[3, 6], [4, 6], [5, 6], [6, 6]], //6th Row
    [[0, 1], [0, 2], [0, 3], [0, 4]],
    [[0, 2], [0, 3], [0, 4], [0, 5]],
    [[0, 3], [0, 4], [0, 5], [0, 6]], //First Column
    [[1, 1], [1, 2], [1, 3], [1, 4]],
    [[1, 2], [1, 3], [1, 4], [1, 5]],
    [[1, 3], [1, 4], [1, 5], [1, 6]], //2nd Column
    [[2, 1], [2, 2], [2, 3], [2, 4]],
    [[2, 2], [2, 3], [2, 4], [2, 5]],
    [[2, 3], [2, 4], [2, 5], [2, 6]], //3rd Column
    [[3, 1], [3, 2], [3, 3], [3, 4]],
    [[3, 2], [3, 3], [3, 4], [3, 5]],
    [[3, 3], [3, 4], [3, 5], [3, 6]], //4th Column
    [[4, 1], [4, 2], [4, 3], [4, 4]],
    [[4, 2], [4, 3], [4, 4], [4, 5]],
    [[4, 3], [4, 4], [4, 5], [4, 6]], //5th Column
    [[5, 1], [5, 2], [5, 3], [5, 4]],
    [[5, 2], [5, 3], [5, 4], [5, 5]],
    [[5, 3], [5, 4], [5, 5], [5, 6]], //6th Column
    [[6, 1], [6, 2], [6, 3], [6, 4]],
    [[6, 2], [6, 3], [6, 4], [6, 5]],
    [[6, 3], [6, 4], [6, 5], [6, 6]], //7th Column
    [[0, 1], [1, 2], [2, 3], [3, 4]],
    [[0, 2], [1, 3], [2, 4], [3, 5]],
    [[0, 3], [1, 4], [2, 5], [3, 6]], //1st Column Diagonal TL-BR
    [[1, 1], [2, 2], [3, 3], [4, 4]],
    [[1, 2], [2, 3], [3, 4], [4, 5]],
    [[1, 3], [2, 4], [3, 5], [4, 6]], //2nd Column Diagonal TL-BR
    [[2, 1], [3, 2], [4, 3], [5, 4]],
    [[2, 2], [3, 3], [4, 4], [5, 5]],
    [[2, 3], [3, 4], [4, 5], [5, 6]], //3rd Column Diagonal TL-BR
    [[3, 1], [4, 2], [5, 3], [6, 4]],
    [[3, 2], [4, 3], [5, 4], [6, 5]],
    [[3, 3], [4, 4], [5, 5], [6, 6]], //4th Column Diagonal TL-BR
    [[3, 1], [2, 2], [1, 3], [0, 4]],
    [[3, 2], [2, 3], [1, 4], [0, 5]],
    [[3, 3], [2, 4], [1, 5], [0, 6]], //1st Column Diagonal TR-BL
    [[4, 1], [3, 2], [2, 3], [1, 4]],
    [[4, 2], [3, 3], [2, 4], [1, 5]],
    [[4, 3], [3, 4], [2, 5], [1, 6]], //2nd Column Diagonal TR-BL
    [[5, 1], [4, 2], [3, 3], [2, 4]],
    [[5, 2], [4, 3], [3, 4], [2, 5]],
    [[5, 3], [4, 4], [3, 5], [2, 6]], //3rd Column Diagonal TR-BL
    [[6, 1], [5, 2], [4, 3], [3, 4]],
    [[6, 2], [5, 3], [4, 4], [3, 5]],
    [[6, 3], [5, 4], [4, 5], [3, 6]], //4th Column Diagonal TR-BL
]


    // Set class based on the value inside, so clearing the state resets the classes always
    let colClass 
    if (c4Tiles[idx][1] !== '' &&
        c4Tiles[idx][2] !== '' &&
        c4Tiles[idx][3] !== '' &&
        c4Tiles[idx][4] !== '' &&
        c4Tiles[idx][5] !== '' &&
        c4Tiles[idx][6] !== '') 
    {
      colClass = 'connect-four-column filled'
    } else {
      colClass = `connect-four-column`
    }
    
  
  return (
    <div className={colClass}
      title='Drop Character Token'
      onClick={handleBoxClick}
    >
      <ConnectFourTile c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={0} colIdx={idx} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
      <ConnectFourTile c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={1} colIdx={idx} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
      <ConnectFourTile c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={2} colIdx={idx} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
      <ConnectFourTile c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={3} colIdx={idx} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
      <ConnectFourTile c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={4} colIdx={idx} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
      <ConnectFourTile c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={5} colIdx={idx} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
      <ConnectFourTile c4Tiles={c4Tiles} setC4Tiles={setC4Tiles} idx={6} colIdx={idx} playerOneTurn={playerOneTurn} setPlayerOneTurn={setPlayerOneTurn} playerOneChar={playerOneChar} playerTwoChar={playerTwoChar} setWinner={setWinner}/>
    </div>
  )
}
