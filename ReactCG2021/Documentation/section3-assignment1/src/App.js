import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
      username: 'John Lennon'
  }

  usernameChangedHandler = (event) => {
    this.setState( { 
      username: event.target.value
     } )
  }


  // react will call this method to render something to the DOM.
  render() {

    // we are returning JSX, it seems to be HTML, but is NOT.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <UserInput 
        currentName={this.state.username} 
        changed={this.usernameChangedHandler} />

        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
    
  }
}

export default App;
