import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // setting up the initial status of the Component.

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

    const [userInput, setUserInput]  // Destructuring assignment [<currentStateValue>,<functionUsedForUpdatingIt>]
        = useState({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });

    const titleChangeHandler = (event) => {
        // whenever you update 'state' and you depend on the previous state, you should call the setter and pass-in a function to the State setter.
        // This anonymous function, which you pass to setUserInput here, will automatically be executed by React. And it will receive the previous state snapshot
        // for that state for which you're calling. If you use this approach, React will guarantee that the state snapshot it gives you here in this inner function,
        // will always be the latest state snapshot.

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    }

    const SubmitHandler = (event) => {
        // Usually, onSubmit will reload the page, we can prevent the default of this request being sent
        // of this request being sent and since that request is not sent the page will now also not reload
        // because we stay on the currently loaded page.

        event.preventDefault(); // This is built into JS, nothing reacts-specific.
        
        // userInput State variable is our current ExpenseData.
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            // FIXING date: adding Date constructor because this was saving the date as a String value, not as Date.
            date: new Date(userInput.enteredDate)
        };

        // adding communication to the parent component.
        props.onSaveExpenseData(expenseData);

        // Adding Two-way binding, after the user submit the form, reset to the initial state.
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    }

    
    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={userInput.enteredAmount} min={0.01} step={0.01} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={userInput.enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;
