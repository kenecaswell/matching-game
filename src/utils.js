/**
 * Shuffles array in place.
 * @param {Array} arr items An array containing the items.
 */
function shuffle(arr) {
  let newArray = [...arr]
  for (let i = newArray.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1))
    let temp = newArray[i]
    newArray[i] = newArray[rand]
    newArray[rand] = temp
  }
  return newArray
}

export { shuffle }
