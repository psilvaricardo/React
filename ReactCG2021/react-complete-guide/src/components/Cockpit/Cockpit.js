import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    // As a defaul, it takes a function that will be executed for 
    // every render cycle and when the component is created.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000);
    // the 2nd argument will tell useEffect to execute ONLY when a property changed: [props.persons])
    // this [] means you have no dependencies, it will run only the first time is rendered. 
    }, [])

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
            <h1>{props.title}</h1>
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
