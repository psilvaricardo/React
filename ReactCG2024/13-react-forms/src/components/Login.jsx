const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        // extract Form data
        const formData = new FormData(event.target);
        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        };
        console.log("handleSubmit..." + JSON.stringify(data));
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" />
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
};

export default Login;
