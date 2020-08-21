import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <h1 onClick={props.click}>I am {props.name} and I am {props.age} years old.</h1>
            <h2> {props.children} </h2>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(person);