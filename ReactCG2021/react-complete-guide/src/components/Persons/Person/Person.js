import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css'
import Aux from '../../../hoc/Aux'
import divWithClass from '../../../hoc/divWithClass'

// Capital letter on the file name is just a React convention.

// There are a few ways to create a new Component. A new 
// component could be just a simple JS funcion, in its siplest 
// form, it's just a function that returns some JSX. You could 
// also use the ES6 syntax of creating a variable which holds a 
// function, which in the end would result in the same.
// As a best practice, we will use ES6:

class Person extends Component {

    // another way to use refs
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    // this example will set the focus on the last input item on the screen
    // we are using the ref to create a new proṕ and set it to the class.
    componentDidMount()
    {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js] rendering...');

        // example of error handler

        // Uncomment THIS to activate the error boundery POC
        /* const rnd = Math.random();
        if (rnd > 0.8)
        {
            // we have 20% chance of getting an error for this POC.
            throw new Error('Error handler example');
        }*/

        return (
            // we can use this new StyleDiv as a regular react component:
            <Aux>
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} years old
                </p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3" 
                    // ref={(inputEl) => this.inputElement = inputEl }
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        );
    }
}

// after the component's definition we can tell everyone which props this component is using
// and the type of data, so you setup key/value pairs inside the new PropTypes property below,
// if you are writting a library that you plan to share with others, you should include this on
// every component you have:
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
}

export default divWithClass(Person, classes.Person);
