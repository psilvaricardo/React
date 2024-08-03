import { useState, useCallback, memo, useMemo } from "react";

import IconButton from "../UI/IconButton";
import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";
import CounterOutput from "./CounterOutput";
import CounterHistory from "./CounterHistory";
import log from "../../log.js";

const isPrime = (number) => {
    log("Calculating if is prime number", 2, "other");
    if (number <= 1) {
        return false;
    }

    const limit = Math.sqrt(number);

    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

const Counter = memo(({ initialCount }) => {
    log("<Counter /> rendered", 1);

    const initialCountIsPrime = useMemo(
        () => isPrime(initialCount),
        [initialCount]
    );

    // const [counter, setCounter] = useState(initialCount);
    const [counterChanges, setCounterChanges] = useState([
        { value: initialCount, id: Math.random() * 10000 },
    ]);

    const currentCounter = counterChanges.reduce(
        (prevCounter, counterChange) => prevCounter + counterChange.value,
        0
    );

    const handleDecrement = useCallback(() => {
        // setCounter((prevCounter) => prevCounter - 1);

        // Setting up a KEY value that is STRICTLY connected to an specific value.
        // In most scenarios, you'll be dealing with data that's comming from a
        // data base of something like this where you typically have unique IDs,
        // but for this demo, generating such a random number as an ID should be
        // good enought, even thought theoretically we could generate the same number twice.
        setCounterChanges((prevCounterChanges) => [
            { value: -1, id: Math.random() * 10000 },
            ...prevCounterChanges,
        ]);
    }, []);

    const handleIncrement = useCallback(() => {
        // setCounter((prevCounter) => prevCounter + 1);
        setCounterChanges((prevCounterChanges) => [
            { value: 1, id: Math.random() * 10000 },
            ...prevCounterChanges,
        ]);
    }, []);

    return (
        <section className="counter">
            <p className="counter-info">
                The initial counter value was <strong>{initialCount}</strong>.
                It <strong>is {initialCountIsPrime ? "a" : "not a"}</strong>{" "}
                prime number.
            </p>
            <p>
                <IconButton icon={MinusIcon} onClick={handleDecrement}>
                    Decrement
                </IconButton>
                {/*<CounterOutput value={counter} />*/}
                <CounterOutput value={currentCounter} />
                <IconButton icon={PlusIcon} onClick={handleIncrement}>
                    Increment
                </IconButton>
            </p>
            <CounterHistory history={counterChanges} />
        </section>
    );
});

export default Counter;
