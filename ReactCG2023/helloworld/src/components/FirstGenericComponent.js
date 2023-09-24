
import './FirstGenericComponent.css'

// Ctrl + Shift + I : will format the code...

function FirstGenericComponent(props) {

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <div>{props.id}</div>
        </div>
    );

}

export default FirstGenericComponent;
