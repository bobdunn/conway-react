import React from 'react';
import renderer from 'react-test-renderer';
import Grid from './Grid';

describe('#handleClick', () =>{
  let grid, tree;
  beforeEach(()=>{
    grid = renderer.create(<Grid cells={[[1,0],[0,1]]} />)
    tree = grid.toJSON()
    tree.props.handleClick(0,0)
  })
  it('should replace cells with identical collection with dead/alive cell clicked', ()=>{
    expect(tree.props.cells[0][0]).toBe(0)
  })
})
