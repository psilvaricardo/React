import { useState } from "react";
import log from "../../log.js";

const ConfigureCounter = ({ onSet }) => {
    log("<ConfigureCounter>", 1);
    const [enteredNumber, setEnteredNumber] = useState(0);

    const handleChange = (event) => {
        console.log("console.log: ConfigureCounter.handleChange");
        setEnteredNumber(+event.target.value);
    };

    const handleSetClick = () => {
        console.log("console.log: ConfigureCounter.handleSetClick");
        onSet(enteredNumber);
        setEnteredNumber(0);
    };

    return (
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input
                type="number"
                onChange={(e) => handleChange(e)}
                value={enteredNumber}
            />
            <button onClick={(e) => handleSetClick()}>Set</button>
        </section>
    );
};

export default ConfigureCounter;
