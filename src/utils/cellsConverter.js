const fromCellsToArray = function(population){
  if(population.cells.length) {
    return [[1]]
  } else {
    return [[0]]
  }
}

export default { fromCellsToArray }
