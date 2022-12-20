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
