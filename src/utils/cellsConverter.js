const createArrayOfZeroes = (height, width) => {
  let array = new Array(height)
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(width).fill(0)
  }
  return array
}

const fromCellsToArray = population => {
  let array = createArrayOfZeroes(population.height, population.width)
  if(population.cells.length) {
    array[0][0] = 1
  } else {
    array[0][0] = 0
  }
  return array
}

export default { fromCellsToArray }
