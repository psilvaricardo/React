import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(
    ({ targetTime, remainingTime, onReset }, ref) => {
        const dialog = useRef();
        const userLost = remainingTime <= 0;
        const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
        const score = Math.round(
            (1 - remainingTime / (targetTime * 1000)) * 100
        );

        // exposing Component's API to make it more robust and reUsable
        // 1. For this component, we are using showModal() outside this method.
        // 2. So we have the need to expose a function that can be called with
        // the help of a REF outside of this component, which will work independen
        // on how this component would change in the future.
        // 3. The useImperativeHandle hook is meant to work with fwRef hook
        useImperativeHandle(ref, () => {
            return {
                open() {
                    dialog.current.showModal();
                },
            };
        });

        return (
            <dialog
                className="result-modal"
                ref={dialog}
                onClose={() => onReset}
            >
                <h2>You {userLost ? "lost" : "won, your score: " + score} </h2>
                <p>
                    The target time was{" "}
                    <strong>
                        {targetTime} second{targetTime > 1 ? "s" : ""}.
                    </strong>
                </p>
                <p>
                    You stopped the timer wtih{" "}
                    <strong>{formattedRemainingTime} seconds left.</strong>
                </p>
                <form method="dialog" onSubmit={() => onReset}>
                    <button>Close</button>
                </form>
            </dialog>
        );
    }
);

export default ResultModal;
