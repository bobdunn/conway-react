const cellsAreNeighbors = (cell1, cell2) => {
  return Math.abs(cell2.x - cell1.x) === 1
}

export default { cellsAreNeighbors }
