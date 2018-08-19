import React, { Component } from 'react';
import logo from '.';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ali ghali: portfolio</h1>
        </header>
        <p className="App-intro">
         thank you for yout visit<br/>
          my website I am working on re-design it, please visit it later for more information about me.
        </p>
      </div>
    );
  }
}

export default App;
