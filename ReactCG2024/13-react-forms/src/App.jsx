import Header from "./components/Header";
// import Login from "./components/Login";
// import LoginSubmit from "./components/LoginSubmit";
// import LoginState from "./components/LoginState";
// import LoginStateEnhanced from "./components/LoginStateEnhanced";
import LoginStateEnhancedReusable from "./components/LoginStateEnhancedReusable";
// import LoginRefs from "./components/LoginRefs";
// import Signup from "./components/Signup";
// import LoginStateEnhancedValidations from "./components/LoginStateEnhancedValidations";
// import LoginRefsValidations from "./components/LoginRefsValidations";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <LoginStateEnhancedReusable />
            </main>
        </>
    );
};

export default App;
