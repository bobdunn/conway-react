import React, { Component } from 'react';
import logo from '../logo.svg';
import Grid from './Grid'
import './App.css';
import conway from '../utils/conway'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: [
        [0,1,0,1],
        [1,0,1,0],
        [0,1,0,1],
        [1,0,1,0]]
    }
    this.addColumn = this.addColumn.bind(this)
    this.addRow = this.addRow.bind(this)
    this.iterate = this.iterate.bind(this)
    this.startIterating = this.startIterating.bind(this)
    this.stopIterating = this.stopIterating.bind(this)
  }

  addColumn() {
    let newCells = [];
    for(let row of this.state.cells){
      row.push(0)
      newCells.push(row)
    }
    this.setState({cells:newCells})
  }

  addRow() {
    let newCells = this.state.cells.slice(0)
    let newRow = []
    for(let i = 0; i < newCells[0].length; i++){
      newRow.push(0)
    }
    newCells.push(newRow)
    this.setState({cells:newCells})
  }

  iterate() {
    this.setState({cells:conway.iterate(this.state.cells)})
  }

  startIterating() {
    this.interval = setInterval(this.iterate, 500)
  }

  stopIterating() {
    if(this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Conway&#8217;s Game of Life!</h2>
        </div>
        <div>
          <div className="leftControls">
            <button onClick={this.addRow}>Add row</button>
          </div>
          <div className="grid">
            <Grid cells={this.state.cells}/>
              <div className="bottomControls">
                <button onClick={this.addColumn}>Add column</button>
              </div>
            </div>
            <div className="rightControls">
              <button onClick={this.startIterating}>Start</button>
              <button onClick={this.stopIterating}>Stop</button>
              <button onClick={this.iterate}>Iterate</button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
