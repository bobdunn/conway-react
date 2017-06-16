import cellsConverter from './cellsConverter'

describe('#fromCellsToArray', () => {
  it('should convert empty population to dead grid', () => {
    const grid = cellsConverter.fromCellsToArray({height:1, width:1, cells:[]})
    expect(grid).toEqual([[0]])
  })
})
