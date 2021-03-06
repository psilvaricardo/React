import React, {PureComponent} from 'react';
import Person from './Person/Person';

// If you are going to check if your component has changed reviewing all its properties
// you can use PureComponent which is already doing that comparison with a complete props check.
class Persons extends PureComponent{
    //static getDerivedStateFromProps(props, state){
        // YOU MUST USE THIS METHOD VERY CAREFULLY
        // this method can be used to wheter to continue or not the render 
        // process for performace purposes. You can sync the state to your props.
    
        // getDerivedStateFromProps(props, state) => shouldComponebtUpdate(nextProps, nextState)
        // shouldComponebtUpdate(nextProps, nextState) => render() => Update Child component props
        // => getSnapshotBeforeUpdate(prevProps, prevState) => componentDidUpdate()
    
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');

    //     // some changes for optimization and performance.
    //     // I will render ONLY if we have changes.
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked ){
    //         return true; // it tells if react should continue updating.
    //     }
    //     else
    //     {
    //         // if the props.persons does NOT changed, there is no need to rerender.
    //         return false; 
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    // Required when we need to do some CLEAN UP work...
    // it runs right before the component is REMOVED
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((personItem, index) => {
            return <Person 
            key={personItem.id}
            name={personItem.name}
            age={personItem.age}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, personItem.id)}
            isAuth={this.props.isAuthenticated} />
            }
        );
    }
}

export default Persons;
