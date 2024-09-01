import PropTypes from "prop-types";

const Input = ({ label, id, ...props }) => {
    return (
        <p className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} required {...props} />
        </p>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Input;
