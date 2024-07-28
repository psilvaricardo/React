import { useState } from "react";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import log from "./log.js";

const App = () => {
    log("<App /> rendered");

    const [enteredNumber, setEnteredNumber] = useState(0);
    const [chosenCount, setChosenCount] = useState(0);

    const handleChange = (event) => {
        console.log("console.log: App.handleChange");
        setEnteredNumber(+event.target.value);
    };

    const handleSetClick = () => {
        console.log("console.log: App.handleSetClick");
        setChosenCount(enteredNumber);
        setEnteredNumber(0);
    };

    return (
        <>
            <Header />
            <main>
                <section id="configure-counter">
                    <h2>Set Counter</h2>
                    <input
                        type="number"
                        onChange={(e) => handleChange(e)}
                        value={enteredNumber}
                    />
                    <button onClick={(e) => handleSetClick()}>Set</button>
                </section>
                <Counter initialCount={chosenCount} />
            </main>
        </>
    );
};

export default App;
