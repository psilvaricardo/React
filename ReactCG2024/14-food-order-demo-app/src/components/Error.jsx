import PropTypes from "prop-types";

const Error = ({ title, message }) => {
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
};

Error.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Error;
