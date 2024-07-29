import { useState } from "react";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import log from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

const App = () => {
    log("<App /> rendered");
    const [chosenCount, setChosenCount] = useState(0);

    const handleSetCount = (newCount) => {
        setChosenCount(newCount);
    };

    return (
        <>
            <Header />
            <main>
                <ConfigureCounter onSet={() => handleSetCount()} />
                <Counter initialCount={chosenCount} />
            </main>
        </>
    );
};

export default App;
