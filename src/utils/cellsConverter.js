const fromCellsToArray = function(population){
  let array = new Array(population.height).fill(new Array(population.width).fill(0))
  if(population.cells.length) {
    array[0][0] = 1
  } else {
    array[0][0] = 0
  }
  return array
}

export default { fromCellsToArray }
