/*
 * Action Types
 */

const TILE_FLIP = 'TILE_FLIP'
const MATCH_CHECK = 'MATCH_CHECK'
const MATCH_FOUND = 'MATCH_FOUND'
const MATCH_FAILED = 'MATCH_FAILED'

/*
 * Action Creators
 */

function flipTile(index) {
  return {
    type: TILE_FLIP,
    index
  }
}

function checkMatch() {
  return {
    type: MATCH_CHECK
  }
}

function foundMatch(index1, index2) {
  return {
    type: MATCH_FOUND,
    index1,
    index2
  }
}

function failedMatch(index1, index2) {
  return {
    type: MATCH_FAILED,
    index1,
    index2
  }
}

export {
  TILE_FLIP,
  MATCH_CHECK,
  MATCH_FOUND,
  MATCH_FAILED,
  flipTile,
  checkMatch,
  foundMatch,
  failedMatch
}
