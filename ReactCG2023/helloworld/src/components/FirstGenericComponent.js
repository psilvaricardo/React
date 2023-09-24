
import './FirstGenericComponent.css'

// Ctrl + Shift + I : will format the code...

function FirstGenericComponent() {
    // dummy data for now
    const expenseDate = new Date(2023,9,23);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 2394.34;


    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default FirstGenericComponent;
