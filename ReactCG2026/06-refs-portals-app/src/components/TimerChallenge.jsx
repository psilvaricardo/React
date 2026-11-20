import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";

export const TimerChallenge = ({ title, targetTime }) => {
    /** Component-instance specific usage of a ref,
     * and will NOT be reset or cleared when the
     * component is re-executed, react will store the
     * timer id value behind the scenes and will make
     * sure it don't get lost.
     *
     * This will be a value that is still managed by React
     * but it is NOT part of the component state.
     */
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive =
        timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    const handleStart = () => {
        // setting the ref does not re-execute the component funtion
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
    };

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    };

    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running" : "Timer inactive"}
                </p>
            </section>
        </>
    );
};
