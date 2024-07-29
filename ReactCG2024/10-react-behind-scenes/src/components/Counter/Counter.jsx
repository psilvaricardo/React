import { useState } from "react";

import IconButton from "../UI/IconButton";
import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";
import CounterOutput from "./CounterOutput";
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

// memo will look at the props of your component function and whenever the
// component's function would normally execute again -- for example, when
// the App's component function executes -- it will look at the old value
// and will compare it to the new value received when the function is executed
// again, and if those prop values are exactly the same, will NOT execute.
// memo only prevents function executions that are triggered by the parent component.
const Counter = ({ initialCount }) => {
    log("<Counter /> rendered", 1);
    const initialCountIsPrime = isPrime(initialCount);

    const [counter, setCounter] = useState(initialCount);

    function handleDecrement() {
        setCounter((prevCounter) => prevCounter - 1);
    }

    function handleIncrement() {
        setCounter((prevCounter) => prevCounter + 1);
    }

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
                <CounterOutput value={counter} />
                <IconButton icon={PlusIcon} onClick={handleIncrement}>
                    Increment
                </IconButton>
            </p>
        </section>
    );
};

export default Counter;
