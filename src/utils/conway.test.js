import conway from './conway'

describe('#iterate', ()=>{
  it('should return dead population for dead population', () => {
    const input = [[0,0],[0,0]]
    expect(conway.iterate(input)).toEqual([[0,0],[0,0]])
  })

  it('should kill a cell with no live neighbors', () => {
    const input = [[1,0],[0,0]]
    expect(conway.iterate(input)[0][0]).toEqual(0)
  })
  it('should kill a cell with one live neighbors', () => {
    const input = [[1,1],[0,0]]
    expect(conway.iterate(input)[0][0]).toEqual(0)
  })
  it('should keep a cell alive with two neighbors', () => {
    const input = [[1,1],[1,0]]
    expect(conway.iterate(input)[0][0]).toEqual(1)
  })
  it('should keep a cell alive with three neighbors', () => {
    const input = [[1,1],[1,1]]
    expect(conway.iterate(input)[0][0]).toEqual(1)
  })
  it('should kill a cell with four live neighbors', () => {
    const input = [
      [1,0,1],
      [0,1,0],
      [1,0,1]
    ]
    expect(conway.iterate(input)[1][1]).toEqual(0)
  })
  it('should kill a cell with eight live neighbors', () => {
    const input = [
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ]
    expect(conway.iterate(input)[1][1]).toEqual(0)
  })
  it('should keep a dead cell with two live neighbors dead', () => {
    const input = [
      [1,0,0],
      [0,0,0],
      [1,0,0]
    ]
    expect(conway.iterate(input)[1][1]).toEqual(0)
  })
  it('should bring a dead to life with three live neighbors dead', () => {
    const input = [
      [1,0,1],
      [0,0,0],
      [1,0,0]
    ]
    expect(conway.iterate(input)[1][1]).toEqual(1)
  })
})
