import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


const app = props => {
 const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Love', age:69 },
      { name: 'Bae', age: 30 }
    ]
  });

  const [otherState, setOtherState] = useState('Some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Hate', age:69 },
        { name: 'Bae', age: 19 }
      ]
    });
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
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name ={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name ={personsState.persons[1].name} age={personsState.persons[1].age} > My Hobbies: Racing </Person>

    </div>
  );
  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
};

export default app;