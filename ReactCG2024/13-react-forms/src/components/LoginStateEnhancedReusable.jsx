import { useState } from "react";
import Input from "./Input";
import { isEmail, hasMinLength } from "../util/validation";

const LoginStateEnhancedReusable = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        passwd: "",
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        passwd: false,
    });

    const IsEmailInvalid = didEdit.email && !isEmail(enteredValues.email);
    const IsPasswdInvalid =
        didEdit.passwd && !hasMinLength(enteredValues.passwd, 6);

    const handleInputChange = (id, value) => {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [id]: false,
        }));
    };

    const handleInputBlur = (id) => {
        setDidEdit((prevValues) => ({
            ...prevValues,
            [id]: true,
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
                <Input
                    label="Email"
                    id="email"
                    error={
                        IsEmailInvalid && "Please enter a valid email address"
                    }
                    type="email"
                    name="email"
                    value={enteredValues.email}
                    onBlur={() => handleInputBlur("email")}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                />

                <Input
                    label="Password"
                    id="password"
                    error={IsPasswdInvalid && "Please enter a valid password"}
                    type="password"
                    name="password"
                    value={enteredValues.passwd}
                    onBlur={() => handleInputBlur("passwd")}
                    onChange={(e) =>
                        handleInputChange("passwd", e.target.value)
                    }
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
