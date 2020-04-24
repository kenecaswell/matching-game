import React from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Tile } from '../components/Tile'
import { CompletionModal } from '../components/CompletionModal'

import './game.css'

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

  return (
    <div>
      <header className='game-header'>
        <Container fluid>
          <Row xs={12}>
            <Col xs={7}>
              <div className='game-title'>
                Find all the matching tiles!
              </div>
            </Col>
            <Col xs={5}>
              <div className='game-info'>
                Number of tries: {guesses}
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        {renderTiles()}
      </Container>
      <CompletionModal />
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
