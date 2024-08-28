import { useRef, useState } from "react";
import { isEmail } from "../util/validation";

const LoginRefsValidations = () => {
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const email = useRef();
    const passwd = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const enteredEmail = email.current.value;
        const enteredPasswd = passwd.current.value;

        // email validation
        if (isEmail(enteredEmail)) {
            setIsEmailInvalid(false);
        } else {
            setIsEmailInvalid(true);
            return;
        }
        console.log("handleSubmit... Submitted!");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" ref={email} />
                    <div className="control-error">
                        {isEmailInvalid && (
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
                        ref={passwd}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button type="reset" className="button button-flat">
                    Reset
                </button>
                <button type="submitt" className="button">
                    Login
                </button>
            </p>
        </form>
    );
};

export default LoginRefsValidations;
