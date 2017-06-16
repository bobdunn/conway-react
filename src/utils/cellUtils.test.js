import cellUtils from './cellUtils'

describe('#cellsAreNeighbors', () => {
  it('should return false for the same cell', () => {
    expect(cellUtils.cellsAreNeighbors({x:0, y:0}, {x:0, y:0})).toBeFalsy()
  })
  it('should return true for the cell to the right', () => {
    expect(cellUtils.cellsAreNeighbors({x:0, y:0}, {x:1, y:0})).toBeTruthy()
  })
  it('should return true for the cell to the left', () => {
    expect(cellUtils.cellsAreNeighbors({x:1, y:0}, {x:0, y:0})).toBeTruthy()
  })
  it('should return true for the cell below', () => {
    expect(cellUtils.cellsAreNeighbors({x:0, y:0}, {x:0, y:1})).toBeTruthy()
  })
  it('should return true for a cell to the right one below', () => {
    expect(cellUtils.cellsAreNeighbors({x:0, y:0}, {x:1, y:1})).toBeTruthy()
  })
  it('should return false for a cell to the right but below by two', () => {
    expect(cellUtils.cellsAreNeighbors({x:0, y:0}, {x:1, y:2})).toBeFalsy()
  })
})

describe('#getNeighborCount', () => {
  it('should return 0 for a solitary cell', () => {
    expect(cellUtils.getNeighborCount({x:0, y:0}, [{x:0, y:0}])).toBe(0)
  })
})
