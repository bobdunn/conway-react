import conway from './conway'

describe('#iterate', ()=>{
  it('should return dead population for dead population', () => {
    const input = {height:1, width:1, cells:[]}
    expect(conway.iterate(input)).toEqual({height:1, width:1, cells:[]})
  })

  it('should kill a cell with no live neighbors', () => {
    const input = {height:1, width:1, cells:[{x:0, y:0}]}
    expect(conway.iterate(input).cells.length).toEqual(0)
  })
  it('should keep a cell alive with two neighbors', () => {
    const input = {height:1, width:1, cells:[
      {x:0, y:0}, {x:1, y:0},
      {x:0, y:1}
    ]}
    expect(conway.iterate(input).cells.some(c => c.x === 0 && c.y === 0)).toBeTruthy()
  })
  // it('should keep a cell alive with three neighbors', () => {
  //   const input = [[1,1],[1,1]]
  //   expect(conway.iterate(input)[0][0]).toEqual(1)
  // })
  // it('should kill a cell with four live neighbors', () => {
  //   const input = [
  //     [1,0,1],
  //     [0,1,0],
  //     [1,0,1]
  //   ]
  //   expect(conway.iterate(input)[1][1]).toEqual(0)
  // })
  // it('should kill a cell with eight live neighbors', () => {
  //   const input = [
  //     [1,1,1],
  //     [1,1,1],
  //     [1,1,1]
  //   ]
  //   expect(conway.iterate(input)[1][1]).toEqual(0)
  // })
  // it('should keep a dead cell with two live neighbors dead', () => {
  //   const input = [
  //     [1,0,0],
  //     [0,0,0],
  //     [1,0,0]
  //   ]
  //   expect(conway.iterate(input)[1][1]).toEqual(0)
  // })
  // it('should bring a dead to life with three live neighbors dead', () => {
  //   const input = [
  //     [1,0,1],
  //     [0,0,0],
  //     [1,0,0]
  //   ]
  //   expect(conway.iterate(input)[1][1]).toEqual(1)
  // })
})
