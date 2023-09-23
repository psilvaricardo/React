
import './FirstGenericComponent.css'

// Ctrl + Shift + I : will format the code...

function FirstGenericComponent() {
    return (
        <div className="expense-item">
            <div>September 23 2023</div>
            <div className="expense-item__description">
                <h2>First Geneic Component</h2>
                <div className="expense-item__price">$2394.34</div>
            </div>
        </div>
    );
}

export default FirstGenericComponent;
