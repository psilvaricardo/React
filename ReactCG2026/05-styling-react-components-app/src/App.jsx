import { Header } from "./components/Header.jsx";
import { AuthInputs } from "./components/AuthInputs.jsx";
import "./App.css";

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <AuthInputs />
            </main>
        </>
    );
};
