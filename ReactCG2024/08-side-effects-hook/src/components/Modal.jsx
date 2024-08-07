import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, children, onClose }) => {
    const dialog = useRef();

    // another example on how we can use useEffect to
    // sync a property value with the DOM/API, because
    // these functiom calls does not directly modify
    // the behavior of the JSX code
    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog className="modal" ref={dialog} onClose={onClose}>
            {open ? children : null}
        </dialog>,
        document.getElementById("modal")
    );
};

export default Modal;
