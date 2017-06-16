import cellUtils from './cellUtils'

describe('#cellsAreNeighbors', () => {
  it('should return true for the cell to the right', () => {
    expect(cellUtils.cellsAreNeighbors({x:0, y:0}, {x:1, y:0})).toBeTruthy()
  })
  it('should return true for the cell to the left', () => {
    expect(cellUtils.cellsAreNeighbors({x:1, y:0}, {x:0, y:0})).toBeTruthy()
  })
  it('should return false for the same cell', () => {
    expect(cellUtils.cellsAreNeighbors({x:0, y:0}, {x:0, y:0})).toBeFalsy()
  })
})
