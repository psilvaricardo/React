import FirstGenericComponent from './FirstGenericComponent';
import './DisplayingComponents.css';

function DisplayingComponents(props) {

    return (

        <div className="expenses">
            {props.expenses.map((expense) => (
                <FirstGenericComponent
                    key={expense.id} // Don't forget to provide a unique key for each component
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    );

}

export default DisplayingComponents;