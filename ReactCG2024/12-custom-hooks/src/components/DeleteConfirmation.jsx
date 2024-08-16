import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import PropTypes from "prop-types";

const TIMER = 3000;

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onConfirm();
        }, TIMER);

        return () => {
            clearTimeout(timer);
        };
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
            <ProgressBar timer={TIMER} />
        </div>
    );
};

// Define prop types for the DeleteConfirmation component
DeleteConfirmation.propTypes = {
    onConfirm: PropTypes.func.isRequired, // ensure that onConfirm is a function
    onCancel: PropTypes.func.isRequired, // ensure that onCancel is a function
};

export default DeleteConfirmation;
