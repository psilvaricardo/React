import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// Let's use React Hooks, they are basically just a collection of 
// functions exposed to you by React so you can use them in functional
// components, let's convert the below component into a functional one..!!

const app = props => {
// class App extends Component {

  // useState returns an array with exactly 2 elements, the first element will 
  // always be our current state, the secornd element will be a function
  // that will allow us to update this state, so React is aware of it and
  // re-render this component.

  // we are also using array destructuring, this allows you to pull elements out
  // of the array you get back from the right side of the equal sign (function call)
  const [ personsState, setPersonsState ] = useState( {
    persons: [
      { name: 'Paul', age: 28 },
      { name: 'Mike', age: 40 },
      { name: 'John', age: 57 }
    ]
  } );

  // We can have multiple useState calls with multiple state slices (so to say), 
  // it's the recommended way on how you manage state in functional components.
  const [ otherState, SetOtherState ] = useState('some other value');

  // now we have a function inside a function
  const switchNameHandler = () => {
    // console.log('name handler was clicked..!!');
    // DON'T DO THIS: personsState.persons[0].name = 'Richard';
    
    // Since we extend from Component, this allow us to ensure 
    // React gets to know about this update and updates the DOM.
    // setState takes an Object as an argument and it will merge 
    // whatever we define here with our existing 'state'.

    // But if you are using a functional component, setPersonsState
    // does NOT merge whatever you pass to it with the old state, it
    // will REPLACE the old state with it, creating a new one.
    setPersonsState( { 
      persons: [
        { name: 'Paul Walker', age: 28 },
        { name: 'Mike', age: 40 },
        { name: 'John', age: 47 }
      ]
    } );
  };

  // react will call this method to render something to the DOM.
  // render() {

    // we are returning JSX, it seems to be HTML, but is NOT.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this works now?')) 
  //}
}

export default app;
