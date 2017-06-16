export default {
  iterate(grid){
    let cells = []
    for(const cell of grid.cells) {
      if(grid.cells.length === 3) {
        cells.push(cell)
      }
    }

    return Object.assign(grid, {cells})
  }
}
