import React from 'react';
import Radium from 'radium';
import './Person.css'

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
    const divstyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }


    return (
        <div className="Person" style={divstyle}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

// Wrap pur app with Radium, this is just a higher order component
// kind-of injecting some extra functionality
export default Radium(person);

