import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import logo from '../src/assets/animated/weather.svg';
import Weather from './container/Weather/Weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <div>WEATHER APP</div>
        </header>
        <BrowserRouter>
          <Weather />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
