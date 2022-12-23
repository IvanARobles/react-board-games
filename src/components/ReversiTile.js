import React from 'react'

export default function ReversiTile({ 
    revTiles, 
    setRevTiles, 
    rowIdx, 
    colIdx, 
    playerOneTurn, 
    setPlayerOneTurn,  
    playerOneChar, 
    playerTwoChar, 
    setWinner,
    revTileCount,
    setRevTileCount,
    setWinnerCount
 }) {
  
  function handleBoxClick(e) {
    let newTiles = [
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
      ]
    
    // Create deep copy of tiles
    for (let i = 0; i < revTiles.length; i++) {
      for (let j = 0; j < revTiles[0].length; j++) {
        newTiles[i][j] = revTiles[i][j]
      }
    }
    let currentPlayerChar, notCurrentPlayerChar
    if (playerOneTurn) {
      currentPlayerChar = playerOneChar.toLowerCase()
      notCurrentPlayerChar = playerTwoChar.toLowerCase()
    } else {
      currentPlayerChar = playerTwoChar.toLowerCase()
      notCurrentPlayerChar = playerOneChar.toLowerCase()
    }
    // Set this tile to the current player
    newTiles[rowIdx][colIdx] = currentPlayerChar

    let flipCoordinates = []
    let checkingCoordinates = []
    // Flip all opponent tiles bounded by this token and the player's existing tokens

    let continueCheck = false
    // Check DOWNWARD until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx + i;
      // If out of bounds, stop checking this direction
      if (newRowIdx > 7) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][colIdx] === notCurrentPlayerChar) {
        checkingCoordinates.push([newRowIdx, colIdx])
        continueCheck = true; 
      }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][colIdx] === currentPlayerChar && continueCheck) {
        flipCoordinates.push(...checkingCoordinates)
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    checkingCoordinates = []
    continueCheck = false
    // Check UPWARD until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx - i;
      // If out of bounds, stop checking this direction
      if (newRowIdx < 0) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][colIdx] === notCurrentPlayerChar) {
        checkingCoordinates.push([newRowIdx, colIdx])
        continueCheck = true; 
      }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][colIdx] === currentPlayerChar && continueCheck) {
        flipCoordinates.push(...checkingCoordinates)
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    checkingCoordinates = []
    continueCheck = false
    // Check RIGHT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newColIdx = colIdx + i;
      // If out of bounds, stop checking this direction
      if (newColIdx > 7) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[rowIdx][newColIdx] === notCurrentPlayerChar) {
        checkingCoordinates.push([rowIdx, newColIdx])
        continueCheck = true; 
      }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[rowIdx][newColIdx] === currentPlayerChar && continueCheck) { 
        flipCoordinates.push(...checkingCoordinates)
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    checkingCoordinates = []
    continueCheck = false
    // Check LEFT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newColIdx = colIdx - i;
      // If out of bounds, stop checking this direction
      if (newColIdx < 0) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[rowIdx][newColIdx] === notCurrentPlayerChar) {
        checkingCoordinates.push([rowIdx, newColIdx])
        continueCheck = true; 
      }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[rowIdx][newColIdx] === currentPlayerChar && continueCheck) { 
        flipCoordinates.push(...checkingCoordinates)
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    checkingCoordinates = []
    continueCheck = false
    // Check DOWNWARD - RIGHT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx + i;
      let newColIdx = colIdx + i;
      // If out of bounds, stop checking this direction
      if (newRowIdx > 7 || newColIdx > 7) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][newColIdx] === notCurrentPlayerChar) {
        checkingCoordinates.push([newRowIdx, newColIdx])
        continueCheck = true; 
      }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][newColIdx] === currentPlayerChar && continueCheck) {
        flipCoordinates.push(...checkingCoordinates)
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    checkingCoordinates = []
    continueCheck = false
    // Check UPWARD - RIGHT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx - i;
      let newColIdx = colIdx + i;
      // If out of bounds, stop checking this direction
      if (newRowIdx < 0 || newColIdx > 7) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][newColIdx] === notCurrentPlayerChar) {
        checkingCoordinates.push([newRowIdx, newColIdx])
        continueCheck = true; 
      }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][newColIdx] === currentPlayerChar && continueCheck) {
        flipCoordinates.push(...checkingCoordinates)
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    checkingCoordinates = []
    continueCheck = false
    // Check DOWNWARD - LEFT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx + i;
      let newColIdx = colIdx - i;
      // If out of bounds, stop checking this direction
      if (newRowIdx > 7 || newColIdx < 0) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][newColIdx] === notCurrentPlayerChar) {
        checkingCoordinates.push([newRowIdx, newColIdx])
        continueCheck = true; 
      }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][newColIdx] === currentPlayerChar && continueCheck) {
        flipCoordinates.push(...checkingCoordinates)
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    checkingCoordinates = []
    continueCheck = false
    // Check UPWARD - LEFT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx - i;
      let newColIdx = colIdx - i;
      // If out of bounds, stop checking this direction
      if (newRowIdx < 0 || newColIdx < 0) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][newColIdx] === notCurrentPlayerChar) {
        checkingCoordinates.push([newRowIdx, newColIdx])
        continueCheck = true; 
      }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][newColIdx] === currentPlayerChar && continueCheck) {
        flipCoordinates.push(...checkingCoordinates)
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }

    for (let i = 0; i < flipCoordinates.length; i++) {
      let flipRow = flipCoordinates[i][0]
      let flipCol = flipCoordinates[i][1]
      newTiles[flipRow][flipCol] = currentPlayerChar
    }

    let newCount = revTileCount + 1
    setRevTileCount(newCount)
    setRevTiles(newTiles)
    setPlayerOneTurn(!playerOneTurn)
    if (newCount === 64) checkOutcome(newTiles)
  }

/***** Function to determine the winner once all tiles have been filled *****/
  function checkOutcome(tilesCopy) {
    let pOneCount = 0, pTwoCount = 0
    for (let i = 0; i < revTiles.length; i++) {
      for (let j = 0; j < revTiles[0].length; j++) {
        if (tilesCopy[i][j] === playerOneChar.toLowerCase()) pOneCount++
        else if (tilesCopy[i][j] === playerTwoChar.toLowerCase()) pTwoCount++
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

/***** Function to check empty tiles and determine if a new tile can be placed their this turn *****/
  function checkPossibleReversi() {
    let emptyTileClass = 'reversi-box not-possible'
    if (playerTwoChar === '') return emptyTileClass
    let currPlayerChar, notPlayerChar
    if (playerOneTurn) {
      currPlayerChar = playerOneChar.toLowerCase()
      notPlayerChar = playerTwoChar.toLowerCase()
    } else {
      currPlayerChar = playerTwoChar.toLowerCase()
      notPlayerChar = playerOneChar.toLowerCase()
    }
    let continueCheck = false
    // Check DOWNWARD until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx + i;
      // If out of bounds, stop checking this direction
      if (newRowIdx > 7) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][colIdx] === notPlayerChar) { continueCheck = true; }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][colIdx] === currPlayerChar && continueCheck) {
        emptyTileClass = 'reversi-box possible'
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    continueCheck = false
    // Check UPWARD until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx - i;
      // If out of bounds, stop checking this direction
      if (newRowIdx < 0) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][colIdx] === notPlayerChar) { continueCheck = true; }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][colIdx] === currPlayerChar && continueCheck) {
        emptyTileClass = 'reversi-box possible'
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    continueCheck = false
    // Check RIGHT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newColIdx = colIdx + i;
      // If out of bounds, stop checking this direction
      if (newColIdx > 7) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[rowIdx][newColIdx] === notPlayerChar) { continueCheck = true; }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[rowIdx][newColIdx] === currPlayerChar && continueCheck) { 
        emptyTileClass = 'reversi-box possible'
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    continueCheck = false
    // Check LEFT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newColIdx = colIdx - i;
      // If out of bounds, stop checking this direction
      if (newColIdx < 0) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[rowIdx][newColIdx] === notPlayerChar) { continueCheck = true; }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[rowIdx][newColIdx] === currPlayerChar && continueCheck) { 
        emptyTileClass = 'reversi-box possible'
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    continueCheck = false
    // Check DOWNWARD - RIGHT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx + i;
      let newColIdx = colIdx + i;
      // If out of bounds, stop checking this direction
      if (newRowIdx > 7 || newColIdx > 7) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][newColIdx] === notPlayerChar) { continueCheck = true; }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][newColIdx] === currPlayerChar && continueCheck) {
        emptyTileClass = 'reversi-box possible'
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    continueCheck = false
    // Check UPWARD - RIGHT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx - i;
      let newColIdx = colIdx + i;
      // If out of bounds, stop checking this direction
      if (newRowIdx < 0 || newColIdx > 7) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][newColIdx] === notPlayerChar) { continueCheck = true; }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][newColIdx] === currPlayerChar && continueCheck) {
        emptyTileClass = 'reversi-box possible'
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    continueCheck = false
    // Check DOWNWARD - LEFT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx + i;
      let newColIdx = colIdx - i;
      // If out of bounds, stop checking this direction
      if (newRowIdx > 7 || newColIdx < 0) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][newColIdx] === notPlayerChar) { continueCheck = true; }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][newColIdx] === currPlayerChar && continueCheck) {
        emptyTileClass = 'reversi-box possible'
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }
    continueCheck = false
    // Check UPWARD - LEFT until you reach the end or another token of this player
    for (let i = 1; i < 8; i++) {
      let newRowIdx = rowIdx - i;
      let newColIdx = colIdx - i;
      // If out of bounds, stop checking this direction
      if (newRowIdx < 0 || newColIdx < 0) { break }
      // Must find token(s) of the other player to keep checking
      else if (revTiles[newRowIdx][newColIdx] === notPlayerChar) { continueCheck = true; }
      // Continue check must have been set to true first before finding the current player's token
      else if (revTiles[newRowIdx][newColIdx] === currPlayerChar && continueCheck) {
        emptyTileClass = 'reversi-box possible'
        break
      } 
      // If neither player token is found, this direction does not make it possible to place a tile
      else { break }
    }

    return emptyTileClass
  }

  // Set class based on the value inside, so clearing the state resets the classes always
  let tileClass 
  if (revTiles[rowIdx][colIdx] === '') {
    tileClass = checkPossibleReversi()
  } else {
    tileClass = `reversi-box filled ${revTiles[rowIdx][colIdx]}`
  }

  return (
    <div className={tileClass}
      onClick={handleBoxClick}
      title="Place Character Token"
    ></div>
  )
}
