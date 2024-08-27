import Header from "./components/Header";
// import Login from "./components/Login";
// import LoginSubmit from "./components/LoginSubmit";
// import LoginState from "./components/LoginState";
import LoginStateEnhanced from "./components/LoginStateEnhanced";
// import Signup from "./components/Signup";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <LoginStateEnhanced />
            </main>
        </>
    );
};

export default App;
