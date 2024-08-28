import { useRef } from "react";

const LoginRefs = () => {
    const email = useRef();
    const passwd = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit... Submitted!");

        const enteredEmail = email.current.value;
        const enteredPasswd = passwd.current.value;
        console.log(enteredEmail, enteredPasswd);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" ref={email} />
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
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
};

export default LoginRefs;