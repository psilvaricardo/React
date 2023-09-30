import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

  const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 4, 28) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2023, 8, 21) }
  ];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    /* Let's say we wanna create a new array and add the new expense as the first item in the array.
    For that we could add the expense which we're getting here as an item to this array and then use
    as an item to this array and then use the spread operator on the existing expenses to pull out 
    all the existing array elements, and populate the rest of this new array with those existing elements. 
    
    Remember, if we are updating out state depending on the previous state, 
    we should use the function-like argument. And that's the clean way of updating our state */
    setExpenses( (prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
