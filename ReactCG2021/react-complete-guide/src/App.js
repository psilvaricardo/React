import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // react will call this method to render something to the DOM.
  render() {

    // we are returning JSX, it seems to be HTML, but is NOT.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <Person name="Paul" age="28" />
        <Person name="Mike" age="40" >My Hobbies: Racing</Person>
        <Person name="John" age="57" />
      </div>
    );
    
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this works now?')) 
  }
}

export default App;
