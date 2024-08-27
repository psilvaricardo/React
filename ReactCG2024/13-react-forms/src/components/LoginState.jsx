import { useState } from "react";

const LoginState = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPasswd, setEnteredPasswd] = useState("");

    const handleEmailChange = (event) => {
        setEnteredEmail(event.target.value);
    };

    const handlePasswdChange = (event) => {
        setEnteredPasswd(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit... Submitted!");
        console.log("User email: " + enteredEmail);
        console.log("User passwd: " + enteredPasswd);
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
                        value={enteredEmail}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={enteredPasswd}
                        onChange={handlePasswdChange}
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

export default LoginState;
