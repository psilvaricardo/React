import { useState } from "react";

const LoginStateEnhanced = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        passwd: "",
    });

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

export default LoginStateEnhanced;
