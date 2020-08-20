import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1>I am {props.name} and I am {props.age} years old.</h1>
            <h2> {props.children} </h2>
        </div>
    )
};

export default person;