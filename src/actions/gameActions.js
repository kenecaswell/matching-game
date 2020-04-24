/*
 * Action Types
 */

const TILE_FLIP = 'TILE_FLIP'
const MATCH_CHECK = 'MATCH_CHECK'
const GAME_RESTART = 'GAME_RESTART'
const GAME_NEW = 'GAME_NEW'

/*
 * Action Creators
 */

function flipTile (index) {
  return {
    type: TILE_FLIP,
    index
  }
}

function checkMatch () {
  return {
    type: MATCH_CHECK
  }
}

function restartGame () {
  return {
    type: GAME_RESTART
  }
}

function newGame (size = 10) {
  return {
    type: GAME_NEW,
    size
  }
}

export {
  TILE_FLIP,
  MATCH_CHECK,
  GAME_RESTART,
  GAME_NEW,
  flipTile,
  checkMatch,
  restartGame,
  newGame
}
