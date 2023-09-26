import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// Ctrl + Shift + I : will format the code...

const ExpenseItem = (props) => {

    /* An alternate, valid JS syntaxis is using 'object destructuring' :
    function FirstGenericComponent({date, title, amount})
    */

    // setting up the title state variable with an initial value, for this case, 
    // the initial value comes from props.title, but can be anything you need.
    const [title, setTitle] = useState(props.title); // Destructuring assignment [<currentStateValue>,<functionUsedForUpdatingIt>]

    // We can say some things about "STATE": 
    // 1. UseState(...) registers some State, some value as a State for the component in which it is being called, managed by React, to be clear, it registers 
    // it for a specific component instance, it's on a per-component instance basis. We have separate States, even if we create the same component more than once.
    // 2. Now, in addition, whenever State changes -- because we click a button in this case -- it's only this component function and only this specific instance
    // where this component is being used where React will re-evaluate it.
    // 3. By calling useState we tell React that it should manage some value for us. Keep in mind that the component function is re-executed when the State is updated.
    // Line 16 is executed again whenever the component function is executed again. We always get a brand new snapshot of that State when this component function re-executes.
    // 4. React keeps track of when we call useState in a given component instance for the first time. And when we call it for the first time ever, it'll take that argument 
    // as an initial value, but if a component is then re-executed React will not reinitialize the State using props.title; Instead, it will detect that this State had been 
    // initialized in the past, and it will just grab the latest State -- which is based on some State update, for example -- and give us that State instead.
    // 5. State can be updated in many ways! So far, we update our state upon user events (e.g. upon a click). That's very common but not required for state updates! 
    // You can update states for whatever reason you may have.

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );

}

export default ExpenseItem;
