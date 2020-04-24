import { TILE_FLIP, MATCH_CHECK, GAME_RESTART, GAME_NEW } from '../actions/gameActions'

import { initialState, createInitialState } from './initialState'

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case TILE_FLIP:
      return flipTileReducer(state, action)
    case MATCH_CHECK:
      return checkMatchReducer(state, action)
    case GAME_RESTART:
      return initialState
    case GAME_NEW:
      return createInitialState(action.size)
    default:
      return state
  }
}

/*
 * Reducer functions
 */

function flipTileReducer (state, action) {
  const flippedTiles = [...state.flippedTiles]
  flippedTiles.push(action.index)
  const allowInteraction = flippedTiles.length < 2

  const newState = Object.assign({}, state, {
    flippedTiles,
    allowInteraction,
    tiles: state.tiles.map((tile, index) => {
      if (index === action.index) {
        return Object.assign({}, tile, {
          isShown: !tile.isShown
        })
      }
      return tile
    })
  })

  return newState
}

function checkMatchReducer (state, action) {
  const tiles = state.tiles
  const i1 = state.flippedTiles[0]
  const i2 = state.flippedTiles[1]
  const match = tiles[i1].name === tiles[i2].name && tiles[i1].index !== tiles[i2].index
  const foundCount = (match) ? state.foundCount + 1 : state.foundCount
  const foundAll = (foundCount === state.total)
  const guesses = state.guesses + 1

  const newState = Object.assign({}, state, {
    foundCount,
    foundAll,
    guesses,
    flippedTiles: [],
    allowInteraction: true,
    tiles: state.tiles.map((tile, index) => {
      if (index === i1 || index === i2) {
        if (match) {
          return Object.assign({}, tile, {
            isFound: !tile.isFound
          })
        } else {
          return Object.assign({}, tile, {
            isShown: !tile.isShown
          })
        }
      }
      return tile
    })
  })

  return newState
}

export { gameReducer }
