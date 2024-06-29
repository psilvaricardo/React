import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
    const dialog = useRef();

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
        <dialog className="result-modal" ref={dialog}>
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
