const cellsAreNeighbors = (cell1, cell2) => {
  return cell2.x - cell1.x === 1
}

export default { cellsAreNeighbors }
