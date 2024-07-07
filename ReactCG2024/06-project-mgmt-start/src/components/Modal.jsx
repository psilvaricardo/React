import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import AddCreateButton from "./AddCreateButton";

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
        <dialog
            ref={dialog}
            className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
            {children}
            <form method="dialod" className="mt-4 text-right">
                <AddCreateButton>{buttonCaption}</AddCreateButton>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;
