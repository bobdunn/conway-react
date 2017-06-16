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
})
