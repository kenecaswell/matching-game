/*
 * Action Types
 */

const TILE_FLIP = 'TILE_FLIP'

/*
 * Action Creators
 */

function flipTile(index) {
  return {
    type: TILE_FLIP,
    index
  }
}

export {
  TILE_FLIP,
  flipTile,
}
