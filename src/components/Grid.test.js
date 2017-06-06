import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';

describe('#handleClick', () =>{
  let grid;
  beforeEach(()=>{
    grid = new Grid({cells:[[1,0],[0,1],]})
    grid.handleClick(0,0)
  })
  it('should replace cells with identical collection with dead/alive cell clicked', ()=>{
    expect(grid.props.cells[0][0]).toBe(0)
  })
})
