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
