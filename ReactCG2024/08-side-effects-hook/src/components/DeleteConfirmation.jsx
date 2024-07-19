import { useEffect } from "react";

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
    useEffect(() => {
        console.log("Timer Set...");
        const timer = setTimeout(() => {
            onConfirm();
        }, 3000);

        return () => {
            console.log("Timer Clean up...");
            clearTimeout(timer);
        };
    }, []);

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
        </div>
    );
};

export default DeleteConfirmation;
