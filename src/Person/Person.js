import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin : 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    '@media (min-width: 500px)': {
        width: '450px'
    }
`;

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <h1 onClick={props.click}>I am {props.name} and I am {props.age} years old.</h1>
            <h2> {props.children} </h2>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};

export default person;