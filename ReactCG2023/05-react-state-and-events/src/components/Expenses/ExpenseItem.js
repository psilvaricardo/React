
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// Ctrl + Shift + I : will format the code...

const ExpenseItem = (props) => {

    /* An alternate, valid JS syntaxis is using 'object destructuring' :
    function FirstGenericComponent({date, title, amount})
    */

    const clickHandler = () => {
        console.log('Clicked...');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );

}

export default ExpenseItem;
