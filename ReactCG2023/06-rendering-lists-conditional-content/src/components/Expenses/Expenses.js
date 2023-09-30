import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021'); // Destructuring assignment
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
            const expenseYear = new Date(expense.date).getFullYear().toString();
            return expenseYear === filteredYear;
        });

    // adding this dynamic expression to output conditional content
    let expensesContent = <p>No expenses found</p>;
    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id} // Don't forget to provide a unique key for each component
                            id={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                        ));
    }

    return (

        <div>
            <Card className="expenses">
                {/* the ExpenseFilter is a "controled component" because the value, the real logic is not handled there, but in a parent component.*/}
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* This is already rendering the ExpenseItem in a dynamic way using the below dynamic expression */}
                {expensesContent}
            </Card>
        </div>
    );

}

export default Expenses;
