const createArrayOfZeroes = (height, width) => {
  let array = new Array(height)
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(width).fill(0)
  }
  return array
}

const fromCellsToArray = population => {
  let array = createArrayOfZeroes(population.height, population.width)
  for(const cell of population.cells) {
    array[cell.y][cell.x] = 1
  }
  return array
}

export default { fromCellsToArray }
