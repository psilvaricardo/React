import React from 'react';
import './UserOutput.css';

// Capital letter on the file name is just a React convention.

// There are a few ways to create a new Component. A new 
// component could be just a simple JS funcion, in its siplest 
// form, it's just a function that returns some JSX. You could 
// also use the ES6 syntax of creating a variable which holds a 
// function, which in the end would result in the same.
// As a best practice, we will use ES6:

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I'm paragraph one with {props.userName}</p>
            <p>I'm paragraph two with {props.userName}</p>
        </div>
    )
}

export default userOutput;
