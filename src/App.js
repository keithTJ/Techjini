import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Weather from './container/Weather/Weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> WEATHER APP </header>
        <BrowserRouter>
          <Weather />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
