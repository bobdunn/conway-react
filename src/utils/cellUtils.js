const cellsAreNeighbors = (cell1, cell2) => {
  return Math.abs(cell2.x - cell1.x) === 1 || Math.abs(cell2.y - cell1.y) === 1
}

export default { cellsAreNeighbors }
