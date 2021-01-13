import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components'
// import './Person.css'

// we can use this as a regular react component:
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media(min-width:500px){
        width: 450px;
    }
`;

// Capital letter on the file name is just a React convention.

// There are a few ways to create a new Component. A new 
// component could be just a simple JS funcion, in its siplest 
// form, it's just a function that returns some JSX. You could 
// also use the ES6 syntax of creating a variable which holds a 
// function, which in the end would result in the same.
// As a best practice, we will use ES6:

const person = (props) => {
    // Using Radium for media queries if you want to scope it
    // or change something dynamically. Radium will parse this
    // JS property name.
    // const divstyle = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }


    return (
        // we can use this new StyleDiv as a regular react component:
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

// Wrap pur app with Radium, this is just a higher order component
// kind-of injecting some extra functionality
//export default Radium(person);
export default person;
