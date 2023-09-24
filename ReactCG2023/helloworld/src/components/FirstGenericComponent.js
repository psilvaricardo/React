
import CustomDate from './CustomDate';
import './FirstGenericComponent.css';

// Ctrl + Shift + I : will format the code...

function FirstGenericComponent(props) {

    /* An alternate, valid JS syntaxis is using 'object destructuring' :
    function FirstGenericComponent({date, title, amount})
    */

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="expense-item">
            <CustomDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <div>{props.id}</div>
        </div>
    );

}

export default FirstGenericComponent;
