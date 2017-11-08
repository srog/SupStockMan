import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Menu from './menu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            SSM
          </h1>
        </header>
        <p className="App-intro">
          <Menu />
        </p>
      </div>
    );
  }
}

export default App;
