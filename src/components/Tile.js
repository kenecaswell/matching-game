import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'

import { flipTile, checkMatch } from '../actions/gameActions'

const TileBase = ({ flippedTiles, allowInteraction, guesses, flipTile, checkMatch, tile }) => {
  const handleClick = () => {
    if (allowInteraction && !tile.isShown) {
      console.log('clicked - ' + tile.name)
      flipTile(tile.index)

      if (flippedTiles.length) {
        console.log('TRY <-----> ', guesses + 1)
        setTimeout(checkMatch, 800)
      }
    }
  }

  const color = tile.isShown ? tile.color : '#FFFFFF'
  const name = tile.isShown ? tile.name : 'MATCH ME!'
  const visible = tile.isFound ? 'hidden' : 'visible'

  return (
    <Card
      style={{
        width: '10rem',
        height: '10rem',
        backgroundColor: color,
        visibility: visible
      }}
      onClick={handleClick}
    >
      <Card.Body>{name}</Card.Body>
    </Card>
  )
}

TileBase.propTypes = {
  flippedTiles: PropTypes.array.isRequired,
  allowInteraction: PropTypes.bool.isRequired,
  flipTile: PropTypes.func.isRequired,
  checkMatch: PropTypes.func.isRequired,
  tile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  allowInteraction: state.game.allowInteraction,
  flippedTiles: state.game.flippedTiles,
  guesses: state.game.guesses
})

const mapDispatchToProps = dispatch => ({
  flipTile: (index) => dispatch(flipTile(index)),
  checkMatch: () => dispatch(checkMatch())
})

const Tile = connect(mapStateToProps, mapDispatchToProps)(TileBase)
export { Tile }
