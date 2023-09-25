import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = (props) => {

    return (

        <Card className="expenses">
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
    );

}

export default Expenses;
