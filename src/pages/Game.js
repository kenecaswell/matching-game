import React from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Tile } from '../components/Tile'

const GameBase = ({ dispatch, tiles }) => {

  console.log(tiles)

  const renderTiles = () => {
    const len = tiles.length
    let rows = Math.ceil(Math.sqrt(len))
    const rowsDisplay = []
    for (let i = 0; i < rows; i++) {
      const row = <Row key={`row-${i}`}>{ renderRowTiles(rows, i)}</Row>
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

  return (
    <div className='game'>
      <header className='game-header'>
        <p>
          Find all the matching tiles!
        </p>
      </header>
      <Container fluid>
        { renderTiles() }
      </Container>
    </div>
  )
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  tiles: state.game.tiles
})

const Game = connect(mapStateToProps)(GameBase)

export { Game }
