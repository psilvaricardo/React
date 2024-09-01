import PropTypes from "prop-types";

const Button = ({ children, textOnly, className, ...props }) => {
    let cssClasses = textOnly ? "text-button" : "button";
    cssClasses += " " + className;

    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    textOnly: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

Button.defaultProps = {
    textOnly: false,
    className: "",
};

export default Button;
