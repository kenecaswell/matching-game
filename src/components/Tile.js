import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'

import { flipTile, checkMatch } from '../actions/gameActions'

import logo from '../logo.svg'
import './tile.css'

const TileBase = ({ flippedTiles, allowInteraction, guesses, flipTile, checkMatch, tile }) => {
  const handleClick = () => {
    if (allowInteraction && !tile.isShown) {
      console.log('clicked - ' + tile.name)
      flipTile(tile.index)

      if (flippedTiles.length) {
        setTimeout(checkMatch, 800)
      }
    }
  }

  const cardClass = tile.isShown ? 'tile flip' : 'tile'
  const visible = tile.isFound ? 'hidden' : 'visible'

  return (
    <Card
      className={cardClass}
      style={{
        visibility: visible
      }}
      onClick={handleClick}
    >
      <div className='tile-inner'>
        <Card.Text className='tile-front'>
          <img src={logo} className='app-logo' alt='logo' />
        </Card.Text>
        <Card.Text
          className='tile-back'
          style={{
            backgroundColor: tile.color
          }}
        >
          {tile.name}
        </Card.Text>
      </div>
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
