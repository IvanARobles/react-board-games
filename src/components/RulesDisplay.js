import React from 'react'

export default function RulesDisplay({ selectedGame, setRules }) {

  function handleCloseRules() {
    setRules('')
  }
  
  return (
    <>
      <section className='win-message-blocker' onClick={handleCloseRules}>
        <div className='win-message-box'>
          <h3>How to Play {selectedGame}
            {selectedGame === 'Reversi' && <span>&nbsp;(Othello)</span>}
          </h3>
          
          {selectedGame === 'Tic-Tac-Toe' && <ul className='rule-bullets'>
            <li>Players take turns placing their characters on the empty spaces</li>
            <li>A player wins by placing their character in 3 spaces in a row (horizontal, vertical, or diagonal)</li>
            <li>If the board gets full and no one gets 3 in a row, the game is a tie</li>
          </ul>}
          {selectedGame === 'Connect-Four' && <ul className='rule-bullets'>
            <li>Players take turns dropping their character tokens into the columns</li>
            <li>A player wins by getting their character in 4 spaces in a row (horizontal, vertical, or diagonal)</li>
            <li>If the board gets full and no one gets 4 in a row, the game is a tie</li>
          </ul>}{selectedGame === 'Reversi' && <ul className='rule-bullets'>
            <li>Players take turns placing a token: it <span className='underline'>MUST</span> be placed on a spot that "outflanks" the other player's token(s)</li>
            <li>Outflank means that your tokens surround your opponent's token(s) at the ends of a line (like book-ends)</li>
            <li>The tokens you outflank are flipped to yours, the player with more tokens when the board is full wins</li>
            <li>If there are no legal moves you can play, skip your turn. If neither player can play, end the game</li>
          </ul>}
          <div className='rules-buttons'>
            <button 
              onClick={handleCloseRules}
              className='modal-button'
              title='Close Rules Pop-Up'
            >
              Close Rules
            </button>
          </div>
        </div>
      </section>
      
    </>
  )
}
