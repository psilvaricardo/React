import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    const cssClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    // Setting css class names dynamically.
    if (props.persons.length <= 2){
      cssClasses.push(classes.red); // cssClasses = ['red']
    }
    if (props.persons.length <= 1){
      cssClasses.push(classes.bold); // cssClasses = ['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={cssClasses.join(' ')}>This is really working!!</p>
            <button className={btnClass}
            // Passing method references between components.
            // Be aware that this way can be inefficient due to performance.
            onClick={props.clicked}> Switch Name
            </button>
        </div>
    );
}

export default cockpit;
