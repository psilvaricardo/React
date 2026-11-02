import { Header } from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts.jsx";
import { Examples } from "./components/Examples.jsx";

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
};
