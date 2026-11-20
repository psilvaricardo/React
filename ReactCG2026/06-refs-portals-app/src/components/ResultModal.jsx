import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export const ResultModal = ({ ref, targetTime, timeRemaining, onResetFn }) => {
    const dialog = useRef();
    const userLost = timeRemaining <= 0;
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    /** createPortal() allows React to render JSX into a different location
     * in the DOM, outside its parent component's HTML hierarchy. It's commonly
     * used for modals, dialogs, tooltips, and overlays. */
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onResetFn}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>
                The target time was: <strong>{targetTime} seconds</strong>
            </p>
            <p>
                You stopped the timer with{" "}
                <strong>{formattedTimeRemaining} seconds left</strong>
            </p>
            <form method="dialog" onSubmit={onResetFn}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal-root"),
    );
};
