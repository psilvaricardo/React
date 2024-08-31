import Input from "./Input";
import { isEmail, hasMinLength, isEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

const LoginStateEnhancedReusable = () => {
    const {
        value: emailValue,
        hasError: IsEmailInvalid,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
    } = useInput("", (value) => !isEmail(value) || isEmpty(value));

    const {
        value: passwdValue,
        hasError: IsPasswdInvalid,
        handleInputChange: handlePwChange,
        handleInputBlur: handlePwBlur,
    } = useInput("", (value) => hasMinLength(value, 6));

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isEmpty(emailValue) || isEmpty(passwdValue)) {
            console.log("handleSubmit... with some errors!");
            return;
        }

        if (IsEmailInvalid || IsPasswdInvalid) {
            console.log("handleSubmit... with some errors...");
            return;
        }

        console.log("handleSubmit... Submitted!");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    error={
                        IsEmailInvalid && "Please enter a valid email address"
                    }
                    type="email"
                    name="email"
                    value={emailValue}
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                />

                <Input
                    label="Password"
                    id="password"
                    error={IsPasswdInvalid && "Please enter a valid password"}
                    type="password"
                    name="password"
                    value={passwdValue}
                    onBlur={handlePwBlur}
                    onChange={handlePwChange}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
};

export default LoginStateEnhancedReusable;
