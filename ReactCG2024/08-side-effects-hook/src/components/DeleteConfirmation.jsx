import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER_TIME_MS = 3000;

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
    useEffect(() => {
        console.log("Timer Set...");
        const timer = setTimeout(() => {
            onConfirm();
        }, TIMER_TIME_MS);

        return () => {
            console.log("Timer Clean up...");
            clearTimeout(timer);
        };

        // When adding functions as dependencies there is
        // always the danger of creating an infinite loop,
        // because functions in JS are 'objects' that are
        // re-created every time the containing Component's
        // function executes (the App component in this case).
        // The issue is that the onConfirm property will be
        // different between render cycles.
        // We should use useCallback hook when passing functions
        // as dependencies to useEffect.
    }, [onConfirm]);

    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button onClick={onCancel} className="button-text">
                    No
                </button>
                <button onClick={onConfirm} className="button">
                    Yes
                </button>
            </div>
            <ProgressBar timer={TIMER_TIME_MS} />
        </div>
    );
};

export default DeleteConfirmation;
