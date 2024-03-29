import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear]  // Destructuring assignment [<currentStateValue>,<functionUsedForUpdatingIt>]
    = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (

        <div>
            <Card className="expenses">
                {/* the ExpenseFilter is a "controled component" because the value, the real logic is not handled there, but in a parent component.*/}
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id} // Don't forget to provide a unique key for each component
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );

}

export default Expenses;
