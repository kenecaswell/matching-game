import { TILE_FLIP } from '../actions/gameActions'

import { initialState } from './initialState'

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case TILE_FLIP:
      return Object.assign({}, state, {
        tiles: state.tiles.map((tile, index) => {
          if (index === action.index) {
            return Object.assign({}, tile, {
              isShown: !tile.isShown
            })
          }
          return tile
        })
      })
    default:
      return state
  }
}

export { gameReducer }
