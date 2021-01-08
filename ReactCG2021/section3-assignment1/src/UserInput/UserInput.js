import React from 'react';

// Capital letter on the file name is just a React convention.

// There are a few ways to create a new Component. A new 
// component could be just a simple JS funcion, in its siplest 
// form, it's just a function that returns some JSX. You could 
// also use the ES6 syntax of creating a variable which holds a 
// function, which in the end would result in the same.
// As a best practice, we will use ES6:

const userInput = (props) => {

    const inputStyle = {
        border: '2px solid red'
    };

    return (
        <div>
            <input 
            type="text"
            style={inputStyle} 
            onChange={props.changed} 
            value={props.currentName} />
        </div>
    )
}

export default userInput;
