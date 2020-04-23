import React from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Tile } from '../components/Tile'

const GameBase = ({ dispatch, tiles, guesses, foundAll }) => {
  const renderTiles = () => {
    const len = tiles.length
    const rows = Math.ceil(Math.sqrt(len))
    const rowsDisplay = []
    for (let i = 0; i < rows; i++) {
      const row = <Row key={`row-${i}`}>{renderRowTiles(rows, i)}</Row>
      rowsDisplay.push(row)
    }

    return rowsDisplay
  }

  const renderRowTiles = (len, index) => {
    const tilesInRow = []
    let rowIndex = index * len
    for (let i = 0; i < len; i++) {
      if (tiles[rowIndex]) {
        const tileInfo = tiles[rowIndex]
        const tile = <Col key={`col-${i}`}><Tile key={tileInfo.name} tile={tileInfo} /></Col>
        rowIndex++
        tilesInRow.push(tile)
      } else {
        break
      }
    }
    return tilesInRow
  }

  const foundText = foundAll ? 'Congratulations! You found all the matches!' : ''

  return (
    <div className='game'>
      <header className='game-header'>
        <p>
          Find all the matching tiles!
        </p>
      </header>
      <Container fluid>
        {renderTiles()}
      </Container>
      <section>
        Number of tries: {guesses}
      </section>
      <section>
        {foundText}
      </section>
    </div>
  )
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  tiles: state.game.tiles,
  guesses: state.game.guesses,
  foundAll: state.game.foundAll
})

const Game = connect(mapStateToProps)(GameBase)

export { Game }
