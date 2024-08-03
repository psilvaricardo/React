import { useState } from "react";

import log from "../../log.js";

const HistoryItem = ({ count }) => {
    log("<HistoryItem /> rendered", 3);

    const [selected, setSelected] = useState(false);

    function handleClick() {
        setSelected((prevSelected) => !prevSelected);
    }

    return (
        <li onClick={handleClick} className={selected ? "selected" : undefined}>
            {count}
        </li>
    );
};

const CounterHistory = ({ history }) => {
    log("<CounterHistory /> rendered", 2);

    // Here we have a use case where the index should NOT be used as a KEY value.
    // KEY is another thing that React is taken into consideration to map the state
    // to a concrete component instance, you could say. The issue here is that the 
    // index is a fixed position, it always stays the same. You should try to use
    // a KEY value that is STRICTLY connected to a specific value for the concrete 
    // component instance you are working on.
    return (
        <ol>
            {history.map((count) => (
                <HistoryItem key={count.id} count={count.value} />
            ))}
        </ol>
    );
};

export default CounterHistory;
