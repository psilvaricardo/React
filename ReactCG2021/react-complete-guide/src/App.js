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
        <Person />
      </div>
    );
    
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this works now?')) 
  }
}

export default App;
