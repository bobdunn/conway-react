
const getLiveNeighborCount = (grid, i, j) => {
    // brute-force :( If cells knew their coordinates, a more elegant solution with lodash or underscore might make sense.
    let sum = 0;
    if(i > 0){
      sum += grid[i-1][j-1] || 0
      sum += grid[i-1][j  ] || 0
      sum += grid[i-1][j+1] || 0
    }
    sum += grid[i  ][j-1] || 0
    sum += grid[i  ][j+1] || 0
    if(i < grid.length - 1){
      sum += grid[i+1][j-1] || 0
      sum += grid[i+1][j  ] || 0
      sum += grid[i+1][j+1] || 0
    }
    return sum
}

export default {
  iterate(grid){
    let newGrid = [];
    for (var i = 0; i < grid.length; i++) {
      let newRow = []
      for (var j = 0; j < grid[i].length; j++) {
        const liveNeighbors = getLiveNeighborCount(grid,i,j)
        if(grid[i][j] === 1) {
          if(liveNeighbors < 2) {
            newRow.push(0)
          } else if(liveNeighbors < 4) {
            newRow.push(1)
          } else {
            newRow.push(0)
          }
        } else {
          if(liveNeighbors === 3) {
            newRow.push(1)
          } else {
            newRow.push(0)
          }
        }
      }
      newGrid.push(newRow)
    }
    return newGrid
  }
}
