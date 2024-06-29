import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive =
        timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        // stop the timer programmatically
        clearInterval(timer.current);
        // if the timer expired, we need to show the modal wnd
        dialog.current.open();
    }

    const handleReset = () => {
        // reset the timer to the init state, doing this could be dangerous if we don't have a condition.
        setTimeRemaining(targetTime * 1000);
    };

    const handleStart = () => {
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
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button
                        onClick={
                            timerIsActive
                                ? (e) => handleStop()
                                : (e) => handleStart()
                        }
                    >
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;
