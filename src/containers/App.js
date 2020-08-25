import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';


class App extends Component {
  state = {
    persons: [
      { name: 'Love', age: 69 },
      { name: 'Bae', age: 30 }
    ],
    otherState: 'State demo',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // this.state.persons[0].name = "Karan";
    this.setState({
      persons: [
        { name: newName, age: 69 },
        { name: 'Bae', age: 19 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Hot', age: 80 },
        { name: event.target.value, age: 19 }
      ]
    });
  }

  render() {

    console.log(this.state);

    const estyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hi, I am Keith.
        </p>
        <button style={estyle} onClick={() => this.switchNameHandler('Sexy 123')}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Super Sexy')} changed={this.nameChangeHandler}> My  ies: Racing </Person>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
