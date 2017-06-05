import React, { Component } from 'react'

import './App.css';


class Grid extends Component {
  render() {
    let rows = [];
    for (let rowNum = 0; rowNum < this.props.cells.length; rowNum++) {
      const row = this.props.cells[rowNum]
      let cells = [];
      for (let cellNum = 0; cellNum < row.length; cellNum++) {
        const cell = row[cellNum]
        const className = cell===1 ? 'alive' : 'dead'
        cells.push(<td key={`${rowNum}.${cellNum}`} className={className}>&nbsp;</td>)
      }
      rows.push(<tr key={`row${rowNum}`}>{cells}</tr>)

    }
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
      // <div>{JSON.stringify(this.props.cells)}</div>
    )
  }
}

Grid.defaultProps = { cells:[[1, 0], [0, 1]] }

export default Grid
