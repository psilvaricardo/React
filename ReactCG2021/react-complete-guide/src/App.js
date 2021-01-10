import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // we should use 'state' if we need to manage some 
  // component internal data.
  state = {
    persons: [
      { name: 'Paul', age: 28 },
      { name: 'Mike', age: 40 },
      { name: 'John', age: 57 }
    ]
  }

  // Adding Two-way binding
  nameChangedHandler = (event) => {
    this.setState( { 
      persons: [
        { name: 'Paul', age: 28 },
        { name: event.target.value, age: 40 },
        { name: 'John', age: 47 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    // this is either true or false
    const doesShow = this.state.showPersons;
    // remember, this is not overriding the hole state
    // it will merge the new value for showPersons with the existing state.
    this.setState( { showPersons: !doesShow } );
  }

  deletePersonHandler = (personIndex) => {

    // In JS, objects and arrays are referenced types, so when I got persons from 
    // my current state, I got a pointer to the 'original' persons object managed 
    // by React, by 'splicing' the array below, I already mutated the original data, 
    // and while it works without throwing an error, it might lead to unpredictable 
    // errors on your app and BAD PRACTICE, DO NOT DO THE BELOW:

        // const updatedPersons = this.state.persons;
        // updatedPersons.splice(personIndex,1);
        // this.setState({ persons: updatedPersons});
    
    // A good practice is, first, let's create a COPY of the original persons array.
    const updatedPersons = [...this.state.persons];
    // remove one element at the given index
    updatedPersons.splice(personIndex,1);
    // and update the state with the updated array:
    this.setState({ persons: updatedPersons});
  }

  // react will call this method to render something to the DOM.
  render() {

    // inline styles, CSS properties on its JS representation.
    // this way could be bit limited, but it is scoped-style.
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inerhit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    // Handling dynamic content "the JS way" or more efficient way!!
    let persons = null;
    if ( this.state.showPersons ){
      persons = (
        <div>
          {
            // In React, everything is JavaScript, so we need to convert the JS array
            // to valid JSX with the 'map' function, we are creating an anonymous function
            // that will be executed on every element of the given array, this is ES6
            // arrow function I pass to the map, you should return what you want to map
            // this item into, our goal is to return valid JSX code.

            this.state.persons.map(
              (personItem, index) => {
                return <Person 
                          name={personItem.name}
                          age={personItem.age} 
                          click={() => this.deletePersonHandler(index)}/>
              }
            )
          }
          
      </div>
      );
    }


    // we are returning JSX, it seems to be HTML, but is NOT.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button style={btnStyle}
        // Passing method references between components.
        // Be aware that this way can be inefficient due to performance.
        onClick={this.togglePersonsHandler}> Switch Name</button>

        {persons}

      </div>
    );
    
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this works now?')) 
  }
}

export default App;
