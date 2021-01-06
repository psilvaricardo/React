import React from 'react';

// Capital letter on the file name is just a React convention.

// There are a few ways to create a new Component. A new 
// component could be just a simple JS funcion, in its siplest 
// form, it's just a function that returns some JSX. You could 
// also use the ES6 syntax of creating a variable which holds a 
// function, which in the end would result in the same.
// As a best practice, we will use ES6:

const person = () => {
    return <p>I'm a Person and I'm {Math.floor(Math.random()*30)} years old</p>
}

export default person;
