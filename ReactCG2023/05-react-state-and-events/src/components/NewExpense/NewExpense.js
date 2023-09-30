import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // adding communication to the parent component.
        props.onAddExpense(expenseData);
    };


    return (
        <div className='new-expense'>
            {/* Adding Child-To-Partent Communication (Button-up)

            Adding a new property/function to Expense form, the value for this prop should be a function
            that eventually be trigger when onSubmit event happens inside of this component, when the user 
            saves the user expense data */}
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;
