import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, children }) => {
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

    // dialog.current.showModal();

    return createPortal(
        <dialog className="modal" ref={dialog}>
            {children}
        </dialog>,
        document.getElementById("modal")
    );
};

export default Modal;
