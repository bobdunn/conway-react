import React, { Component } from 'react'

import './App.css';

class Grid extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(rowNum, cellNum){
    let newCells = this.props.cells.slice(0)
    newCells[rowNum][cellNum] = newCells[rowNum][cellNum]===0?1:0
    this.setState({cells:newCells})

  }

  render() {
    let rows = [];
    for (let rowNum = 0; rowNum < this.props.cells.length; rowNum++) {
      const row = this.props.cells[rowNum]
      let cells = [];
      for (let cellNum = 0; cellNum < row.length; cellNum++) {
        const cell = row[cellNum]
        const className = cell===1 ? 'alive' : 'dead'
        cells.push(<td key={`${rowNum}.${cellNum}`} className={className} onClick={() => this.handleClick(rowNum, cellNum)}>&nbsp;</td>)
      }
      rows.push(<tr key={`row${rowNum}`}>{cells}</tr>)

    }
    return (
      <table
        handleClick={this.handleClick}
        cells={this.props.cells}>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Grid
