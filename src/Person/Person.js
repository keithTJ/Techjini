import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className = {classes.Person}>
            <h1 onClick={props.click}>I am {props.name} and I am {props.age} years old.</h1>
            <h2> {props.children} </h2>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;