import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import divWithClass from '../hoc/divWithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';
class App extends Component {


  // # 1. we add the constructor.
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    // the state could be initialized here with: this.state = {}
  }

  // we should use 'state' if we need to manage some 
  // component internal data.
  state = {
    persons: [
      // id can be anything as long as it is unique..!!
      { id: 'KHJSD', name: 'Paul', age: 28 },
      { id: 'ASDSA', name: 'Mike', age: 40 },
      { id: 'EWQFS', name: 'John', age: 57 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  // # 2. After the constructor, getDerivedStateFromProps is executed.
  static getDerivedStateFromProps(props, state){
    // YOU MUST USE THIS METHOD VERY CAREFULLY
    // this method can be used to wheter to continue or not the render 
    // process for performace purposes. You can sync the state to your props.

    // getDerivedStateFromProps(props, state) => shouldComponebtUpdate(nextProps, nextState)
    // shouldComponebtUpdate(nextProps, nextState) => render() => Update Child component props
    // => getSnapshotBeforeUpdate(prevProps, prevState) => componentDidUpdate()

    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  //componentWillMount(){
  //  console.log('[App.js] componentWillMount IS deprecated...');
  //}

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true; // if react should continue updating... 
}

  // Adding Two-way binding
  nameChangedHandler = (event, id) => {
    // we want to update the name but of course ONLY for the
    // person into which input field we typed so we need to find it.
    const personIndex = 
      this.state.persons.findIndex(
        // this anonymus function is executed for every element on the array.
        p => {
          // Is this the element I was looking for or not ??
          return p.id === id;
        }
      );

      // later, I can get the person from the state, of course, let's make a copy,
      // IT'S A GOOD PRACTICE TO NOT MUTATE THE STATE DIRECTLY, let's create a new
      // JS object and then use the spread operator in front of the object I'm fetching:
      const personFound = {
        ...this.state.persons[personIndex]
      }

      // I want to update the person's name:
      personFound.name = event.target.value;
      // and always working with copies:
      const updatedPersonsArr = [...this.state.persons];
      updatedPersonsArr[personIndex] = personFound;

      // on a synchronous mode, this.state is NOT GUARANTEED to have the latest state.
      // when you need to update your state based on what we have on the previous state, 
      // it is THE BEST PRACTICE to update the state using an inner function in this way:
      this.setState( (prevState, props) =>{
        return { 
          persons: updatedPersonsArr,
          changeCounter: prevState.changeCounter +1
        };
      });
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

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  // # 3. After getDerivedStateFromProps, the render method is executed.
  // react will call this method to render something to the DOM.
  render() {
    console.log('[App.js] render');

    // Handling dynamic content "the JS way" or more efficient way!!
    let persons = null;

    if ( this.state.showPersons ){
      // In React, everything is JavaScript, so we need to convert the JS array
      // to valid JSX with the 'map' function, we are creating an anonymous function
      // that will be executed on every element of the given array, this is ES6
      // arrow function I pass to the map, you should return what you want to map
      // this item into, our goal is to return valid JSX code.
      persons = (
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} 
            isAuthenticated={this.state.authenticated}
          />
      );
    }

    // we are returning JSX, it seems to be HTML, but is NOT.
    return (

        // Another form of HOC
        //<DivWithClass cssClassName={classes.App}>
        <Aux>
          <button onClick={() => 
            this.setState({showCockpit: false})
            }>Remove Cockpit</button>

          <AuthContext.Provider value={
              {
                authenticated: this.state.authenticated,
                login: this.loginHandler
              }
            }>
          {
            // AuthContext should wrap all the parts of your application 
            // that need access to this context.
            this.state.showCockpit ? (
              <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler} /> ) : null 
          }  
          {persons}
          </AuthContext.Provider>
        </Aux>
    );
    
  }
}

export default divWithClass(App, classes.App);
