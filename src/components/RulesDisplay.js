import React from 'react'

export default function RulesDisplay({ selectedGame, setRules }) {

  function handleCloseRules() {
    setRules('')
  }
  
  return (
    <>
      <section className='win-message-blocker' onClick={handleCloseRules}>
        <div className='win-message-box'>
          <h3>How to Play {selectedGame}</h3>
          <ul className='rule-bullets'>
            <li>Players take turns placing their characters on the empty spaces</li>
            <li>A player wins by placing their character in 3 spaces in a row (horizontal, vertical, or diagonal)</li>
            <li>If the board gets full and no one gets 3 in a row, the game is a tie</li>
          </ul>
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
