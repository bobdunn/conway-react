const cellsAreNeighbors = (cell1, cell2) => {
  return Math.max(Math.abs(cell2.x - cell1.x),  Math.abs(cell2.y - cell1.y)) === 1
}

export default { cellsAreNeighbors }
