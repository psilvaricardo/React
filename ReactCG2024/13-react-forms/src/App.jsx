import Header from "./components/Header";
// import Login from "./components/Login";
// import LoginSubmit from "./components/LoginSubmit";
// import LoginState from "./components/LoginState";
// import LoginStateEnhanced from "./components/LoginStateEnhanced";
// import LoginRefs from "./components/LoginRefs";
// import Signup from "./components/Signup";
import LoginStateEnhancedValidations from "./components/LoginStateEnhancedValidations";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <LoginStateEnhancedValidations />
            </main>
        </>
    );
};

export default App;
