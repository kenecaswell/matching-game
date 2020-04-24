import { shuffle, rainbow } from '../utils'

const tileNames = [
  'Ant Man',
  'Batman',
  'Captain America',
  'Iron Man',
  'Wonder Woman',
  'Thor',
  'Superman',
  'Flash',
  'Hulk',
  'Spider Man'
]

const initialState = createInitialState()

function createInitialState (size) {
  const tiles = []
  const tileInfo = createInfo(size)
  const total = tileInfo.length
  const doubleInfo = [...tileInfo].concat([...tileInfo])
  const shuffledInfo = shuffle(doubleInfo)
  for (let i = 0; i < shuffledInfo.length; i++) {
    const { name, color } = shuffledInfo[i]
    tiles.push(createTile(name, color, i))
  }

  return {
    total,
    tiles,
    guesses: 0,
    foundCount: 0,
    flippedTiles: [],
    allowInteraction: true,
    foundAll: false
  }
}

function createInfo (size = tileNames.length) {
  const info = []
  for (let i = 0; i < size; i++) {
    info.push({ name: tileNames[i], color: rainbow(size, i) })
  }
  return info
}

function createTile (name, color, index) {
  return {
    index: index,
    name: name,
    color: color,
    isShown: false,
    isFound: false
  }
}

export { initialState, createInitialState }
