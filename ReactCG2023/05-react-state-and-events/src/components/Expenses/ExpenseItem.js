
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// Ctrl + Shift + I : will format the code...

const ExpenseItem = (props) => {

    /* An alternate, valid JS syntaxis is using 'object destructuring' :
    function FirstGenericComponent({date, title, amount})
    */

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/*<div>{props.id}</div>*/}
        </Card>
    );

}

export default ExpenseItem;
