import { useState } from "react";

import ConfigureCounter from "./components/Counter/ConfigureCounter";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import log from "./log.js";

const App = () => {
    log("<App /> rendered");
    const [chosenCount, setChosenCount] = useState(0);

    const handleSetCount = (newCount) => {
        console.log("console.log: App.handleSetCount - newCount: " + JSON.stringify(newCount));
        setChosenCount(newCount);
    };

    return (
        <>
            <Header />
            <main>
                <ConfigureCounter onSet={(e) => handleSetCount(e)} />
                <Counter key={chosenCount} initialCount={chosenCount} />
            </main>
        </>
    );
};

export default App;
