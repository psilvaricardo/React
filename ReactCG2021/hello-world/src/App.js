import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Search from './components/Search/Search'

class App extends Component {

  render(){

    return (
        <BrowserRouter>
        <Route path="/" exact render={() => <p>This is the home page</p>} />
        <Route path="/search" component={Search} />
        <div className="App">
          <header className="App-header">
          <Header />
          </header>
        </div>
        </BrowserRouter>
      );
  }


}

export default App;
