import cellsConverter from './cellsConverter'

describe('#fromCellsToArray', () => {
  it('should convert empty population to dead grid', () => {
    const grid = cellsConverter.fromCellsToArray({height:1, width:1, cells:[]})
    expect(grid).toEqual([[0]])
  })
  it('should convert live 1x1 population to live grid', () => {
    const grid = cellsConverter.fromCellsToArray({height:1, width:1, cells:[{x:0,y:0}]})
    expect(grid).toEqual([[1]])
  })
  it('should create (empty) grid with dimensions of population', () => {
    const population = {height:10, width:5, cells:[]}
    const grid = cellsConverter.fromCellsToArray(population)
    expect(grid.length).toEqual(population.height)
    expect(grid[0].length).toEqual(population.width)
  })
  it('should create 1\'s in grid as specified by cells', () => {
    const population = {height:5, width:5, cells:[{x:4, y:0}]}
    const grid = cellsConverter.fromCellsToArray(population)
    expect(grid[0][4]).toEqual(1)
  })
  it('should create an array whose rows are not references to the same object', () => {
    const population = {height:5, width:5, cells:[]}
    const grid = cellsConverter.fromCellsToArray(population)
    expect(grid[0]).not.toBe(grid[1])
  })
})
