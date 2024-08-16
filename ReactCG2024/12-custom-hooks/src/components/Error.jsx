import PropTypes from "prop-types";

const Error = ({ title, message, onConfirm }) => {
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
            {onConfirm && (
                <div id="confirmation-actions">
                    <button onClick={onConfirm} className="button">
                        Okay
                    </button>
                </div>
            )}
        </div>
    );
};

// Define prop types for the Error component
Error.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    onConfirm: PropTypes.func.isRequired, // ensure that onConfirm is a function
};

export default Error;
