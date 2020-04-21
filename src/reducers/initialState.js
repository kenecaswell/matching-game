import { shuffle } from '../utils'

const tileNames = ['A', 'B', 'C', 'D', 'E', 'F']
const initialState = createInitialState(tileNames)

function createInitialState(names) {
  const tiles = []
  const shuffledNames = shuffle([...tileNames])
  for (let i = 0; i < names.length; i++) {
    tiles.push(createTile(shuffledNames, i))
  }

  return {
    tiles
  }
}

function createTile(names, index) {
  return {
    index: index,
    name: names[index],
    img: null,
    color: '#'+Math.floor(Math.random()*16777215).toString(16),
    isShown: false,
    isFound: false
  }
}

export { initialState }
