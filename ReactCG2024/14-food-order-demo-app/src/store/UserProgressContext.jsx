import PropTypes from "prop-types";
import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: "", // 'cart', 'checkout'
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
    const [userProgress, setUserProgress] = useState("");

    function showCart() {
        setUserProgress("cart");
    }

    function hideCart() {
        setUserProgress("");
    }

    function showCheckout() {
        setUserProgress("checkout");
    }

    function hideCheckout() {
        setUserProgress("");
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
};

UserProgressContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProgressContext;
