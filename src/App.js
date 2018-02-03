import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';
import cipher from './cipher';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="all-the-logos">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          {<h1 className="App-title">React Echo</h1>}
        </header>
        <main>
          <div className="put">Input</div>
          <Box handleOnChange={(this._setText)} />
          <div className="arrow">==></div>
          <div className="put">Output 1 (ALL CAPS)</div>
          <Box content={this.state.content.toUpperCase()} />
          <div className="arrow">==></div>
          <div className="put">Output 2 (Ciphered with ROT13)</div>
          <Box content={cipher(this.state.content, 13)} />
        </main>
      </div>
    );
  }

  _setText = (text) => {
    // console.log(text);
    this.setState({
      content: text
    });
  }
}

export default App;
