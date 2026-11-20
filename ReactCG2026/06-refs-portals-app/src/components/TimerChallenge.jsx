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

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        // setting the ref does not re-execute the component funtion
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const handleStop = () => {
        clearTimeout(timer.current);
    };

    return (
        <>
            {timerExpired && (
                <ResultModal result="lost" targetTime={targetTime} />
            )}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Time is running" : "Timer inactive"}
                </p>
            </section>
        </>
    );
};
