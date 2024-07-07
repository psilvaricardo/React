import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
    const dialog = useRef(); // internally this will reach out to the dialog to call the showModal

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method="dialod">
                <button>{buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;
