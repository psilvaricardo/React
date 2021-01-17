import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    // Using Refs in functional components
    const toggleBtnRef = useRef(null);

    // As a defaul, it takes a function that will be executed for 
    // every render cycle and when the component is created.
    useEffect(() => {
        console.log('[Cockpit.js] 1st useEffect');
        
        // this will simulate that we "click" the button just right after 
        // the JSX code was parsed and rendered (meaning, the button exists).
        toggleBtnRef.current.click();

        // Required when we need to do some CLEAN UP work...
        // if 'return' is present with no dependencies properties, meaning, 2nd argument = []
        // it runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle.
        // basically on the first render and when the component is unmounted.
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }

    // the 2nd argument will tell useEffect to execute ONLY when a property changed: [props.persons])
    // this [] means you have no dependencies, it will run only the first time is rendered. 
    }, []);


    // we can have multiple useEffect calls
    useEffect(() =>{
        console.log('[Cockpit.js] 2nd useEffect');

        // notice this does NOT have a 2nd argument, I'm not controlling when this should run,
        // so it will run for every update cycle, this can be usefun with some operation that 
        // should be cancelled whenever the component re-renders, after it updated, so to say.
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    const cssClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    // Setting css class names dynamically.
    if (props.personsLength <= 2){
      cssClasses.push(classes.red); // cssClasses = ['red']
    }
    if (props.personsLength <= 1){
      cssClasses.push(classes.bold); // cssClasses = ['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={cssClasses.join(' ')}>This is really working!!</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                // Passing method references between components.
                // Be aware that this way can be inefficient due to performance.
                onClick={props.clicked}> Switch Name
            </button>

            <AuthContext.Consumer>
                { (context) => <button onClick={context.login}>Log in</button> }
            </AuthContext.Consumer>
        </div>
    );
}

// this is roughtly equivalent to shouldcomponentUpdate
// memo uses memoization, where React will store a snapshot of
// this component and it will re-render only if its input changes,
// hence, adding optimization for functional components.
export default React.memo(cockpit);
