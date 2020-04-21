import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Tile = ({ tile }) => {

  const handleClick = () => {
    console.log('clicked - ' + tile.name)
  }

  return (
    <Card
      style={{ width: '18rem', height: '18rem' }}
      onClick={handleClick}
    >
      {tile.name}
    </Card>
  )
}

export { Tile }
