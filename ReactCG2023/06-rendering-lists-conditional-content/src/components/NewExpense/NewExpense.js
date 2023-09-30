import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // Create a state variable to track whether the form should be shown
  const [showWebForm, setShowWebForm] = useState(false);

  const newExpenseBtnHandler = () => {
    setShowWebForm(true);
  };

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // adding communication to the parent component.
    props.onAddExpense(expenseData);
    setShowWebForm(false);
  };

  const onCancelBtnHandler = () => {
    setShowWebForm(false);
  };

  return (
    <div className="new-expense">
      {!showWebForm && <button onClick={newExpenseBtnHandler}>Add New Expense</button>}
      {showWebForm && 
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancelClickEvent={onCancelBtnHandler} />}
    </div>
  );
}

export default NewExpense;
