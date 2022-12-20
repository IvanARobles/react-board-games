import React, { useState } from 'react'

export default function ThemeSelect({ 
    selectedGame, 
    possibleThemes, 
    themeSelect, 
    setThemeSelect,
    playerOneChar,
    playerTwoChar,
    setPlayerOneChar,
    setPlayerTwoChar }) {

  function handleThemeSelect(e) {
    let themeSelectCopy = [...themeSelect]
    themeSelectCopy = e.target.value
    setThemeSelect(themeSelectCopy)
  }

  function handleCharacterSelect(e) {
    let buttonClasses = `character-button ${e.target.value.toLowerCase()} character-taken`
    e.target.className = buttonClasses
    if (playerOneChar === '') {
        let playerOneCharCopy = [...playerOneChar]
        playerOneCharCopy = e.target.value
        setPlayerOneChar(playerOneCharCopy)
        return
    }
    let playerTwoCharCopy = [...playerOneChar]
    playerTwoCharCopy = e.target.value
    setPlayerTwoChar(playerTwoCharCopy)
  }

  function handleThemeReturn() {
    if (playerOneChar === '') setThemeSelect('')
    else {
      setPlayerOneChar('')
      document.querySelector('.character-taken').classList.remove('character-taken')
    }
  }

  let returnTitle
  if (playerOneChar === '') returnTitle = 'Return to Theme Select'
  else returnTitle = 'Return to Player One Select'


  return (
    <>
      {playerTwoChar === '' && <section className='theme-select-blocker'>
        {themeSelect === '' && <div className='theme-select-box'>
          <h3>Select Theme:</h3>
          <div className='theme-buttons'>
            {possibleThemes.map(theme => {
              let buttonClasses = `theme-button ${theme.theme.toLowerCase()}`
              return (
                <button
                  key={theme.theme}
                  onClick={handleThemeSelect}
                  className={buttonClasses}
                  value={theme.theme}
                ></button>)
            })}
          </div>
        </div>}

        {/* After the theme has been selected, create the character select */}
        {themeSelect !== '' && <div className='character-select-box'>
          {playerOneChar === '' && <h3>Player One: PICK</h3>}
          {playerOneChar !== '' && <h3>Player Two: PICK</h3>}
          <div className='character-buttons'>
        {possibleThemes.find(opt => opt.theme === themeSelect).characters.map(character => {
              let buttonClasses = `character-button ${character.toLowerCase()}`
              return (
                <button
                  key={character}
                  onClick={handleCharacterSelect}
                  className={buttonClasses}
                  value={character}
                  title={character}
                ></button>)
            })}
          </div>
          <button 
            onClick={handleThemeReturn}
            className='modal-button'
            title={returnTitle}
          >
            &#8630;&nbsp;Back
          </button>
        </div>}

      </section>}
      
    </>
  )
}
