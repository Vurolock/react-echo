import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {<h1 className="App-title">React Echo</h1>}
        </header>
        <main>
          <Box />
          <div className="arrow">==></div>
          <Box />
        </main>
      </div>
    );
  }
}

export default App;
