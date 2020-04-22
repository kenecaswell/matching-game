import { shuffle, rainbow } from '../utils'

const initialState = createInitialState()

function createInitialState() {
  const tiles = []
  const tileInfo = createInfo()
  const total = tileInfo.length
  const doubleInfo = [...tileInfo].concat([...tileInfo])
  const shuffledInfo = shuffle(doubleInfo)
  for (let i = 0; i < shuffledInfo.length; i++) {
    const { name, color } = shuffledInfo[i]
    tiles.push(createTile(name, color, i))
  }

  return {
    tiles,
    total,
    foundCount: 0,
    flippedTiles: [],
    allowInteraction: true,
    foundAll: false
  }
}

function createInfo() {
  const info = []
  const tileNames = ['A', 'B', 'C', 'D', 'E', 'F']
  const len = tileNames.length
  for (let i = 0; i < len; i++) {
    info.push({ name: tileNames[i], color: rainbow(len, i)})
  }
  return info
}

function createTile(name, color, index) {
  return {
    index: index,
    name: name,
    color: color,
    isShown: false,
    isFound: false
  }
}

export { initialState }
