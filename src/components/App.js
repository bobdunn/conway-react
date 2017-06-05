import React, { Component } from 'react';
import logo from '../logo.svg';
import Grid from './Grid'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Conway&#8217;s Game of Life!</h2>
        </div>
        <Grid cells={[
          [0,1,0,1],
          [1,0,1,0],
          [0,1,0,1],
          [1,0,1,0]]}/>
      </div>
    );
  }
}

export default App;
