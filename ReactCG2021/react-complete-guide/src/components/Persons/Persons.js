import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    console.log('[Persons.js] rendering...');

    return props.persons.map((personItem, index) => {
        return <Person 
        key={personItem.id}
        name={personItem.name}
        age={personItem.age}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, personItem.id)} />
    }
); }

export default persons;
