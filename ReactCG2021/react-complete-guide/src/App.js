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

  switchNameHandler = () => {
    // console.log('name handler was clicked..!!');
    // DON'T DO THIS: this.state.persons[0].name = 'Richard';
    
    // Since we extend from Component, this allow us to ensure 
    // React gets to know about this update and updates the DOM.
    // setState takes an Object as an argument and it will merge 
    // whatever we define here  with our existing 'state'
    this.setState( { 
      persons: [
        { name: 'Paul Walker', age: 28 },
        { name: 'Mike', age: 40 },
        { name: 'John', age: 47 }
      ]
    } )
  }

  // react will call this method to render something to the DOM.
  render() {

    // we are returning JSX, it seems to be HTML, but is NOT.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this works now?')) 
  }
}

export default App;
