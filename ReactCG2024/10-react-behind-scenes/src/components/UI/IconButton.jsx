import { memo } from "react";
import log from "../../log.js";

// memo will look at the props of your component function and whenever the
// component's function would normally execute again -- for example, when
// the App's component function executes -- it will look at the old value
// and will compare it to the new value received when the function is executed
// again, and if those prop values are exactly the same, will NOT execute.
// memo only prevents function executions that are triggered by the parent component.
const IconButton = memo(({ children, icon, ...props }) => {
    log("<IconButton /> rendered", 2);

    const Icon = icon;
    return (
        <button {...props} className="button">
            <Icon className="button-icon" />
            <span className="button-text">{children}</span>
        </button>
    );
});

export default IconButton;
