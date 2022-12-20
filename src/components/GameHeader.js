import React from 'react'

export default function GameHeader({ gameSelect }) {
  return (
    <div className='game-header'>
      <h1>{gameSelect.find(opt => opt.selected).name}</h1>      
    </div>
  )
}
