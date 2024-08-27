import { useState } from "react";
import { isEmail } from "../util/validation";

const LoginStateEnhancedValidations = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        passwd: "",
    });

    const IsEmailInvalid = !isEmail(enteredValues.email);

    const handleInputChange = (id, value) => {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit... Submitted!");
        console.log("Values: " + JSON.stringify(enteredValues));
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={enteredValues.email}
                        onChange={(e) =>
                            handleInputChange("email", e.target.value)
                        }
                    />
                    <div className="control-error">
                        {IsEmailInvalid && (
                            <p>Please enter a valid email address</p>
                        )}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={enteredValues.passwd}
                        onChange={(e) =>
                            handleInputChange("passwd", e.target.value)
                        }
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
};

export default LoginStateEnhancedValidations;
