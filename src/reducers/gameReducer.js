import { TILE_FLIP, MATCH_CHECK, MATCH_FOUND, MATCH_FAILED } from '../actions/gameActions'

import { initialState } from './initialState'

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case TILE_FLIP:
      const flippedTiles = [...state.flippedTiles]
      flippedTiles.push(action.index)
      const allowInteraction = flippedTiles.length < 2
      return Object.assign({}, state, {
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
    case MATCH_CHECK:
      const tiles = state.tiles
      const i1 = state.flippedTiles[0]
      const i2 = state.flippedTiles[1]
      const match = tiles[i1].name === tiles[i2].name
      const foundCount = (match) ? state.foundCount + 1 : state.foundCount
      const foundAll = (foundCount === state.total)
      console.log('match: ', match);
      return Object.assign({}, state, {
        foundCount,
        foundAll,
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
    default:
      return state
  }
}

export { gameReducer }
