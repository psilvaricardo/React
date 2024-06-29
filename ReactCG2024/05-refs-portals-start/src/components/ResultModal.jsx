import { forwardRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
    return (
        <dialog className="result-modal" ref={ref}>
            <h2>You {result} </h2>
            <p>
                The target time was{" "}
                <strong>
                    {targetTime} second{targetTime > 1 ? "s" : ""}.
                </strong>
            </p>
            <p>
                You stopped the timer wtih <strong>X seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
