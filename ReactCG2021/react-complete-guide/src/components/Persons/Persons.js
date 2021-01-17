import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
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

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true; // if react should continue updating... 
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render(){
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((personItem, index) => {
            return <Person 
            key={personItem.id}
            name={personItem.name}
            age={personItem.age}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, personItem.id)} />
            }
        );
    }
}

export default Persons;
