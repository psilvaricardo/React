import { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

/* 
The file name is named this way to make very clear that we 
are storing the application context, the name is up to you.

In this file we will be managing some React context value.
We use uppercase because this will be an object that contains 
a React Component that we will need later.

We pass a value to createContext that will be use as an initial
value that can be provided to multiple components in your React 
app. The value can be any value you want, a number, string, 
object, etc.

The next step is, we need to provide this context to our application,
and we need to wrap it around part of our application or component tree,
so to say, so that those wrapped compoents can access this value. */

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
});

/* Outsourcing context and state into a separate provider component */
const CartContextProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });

    const handleAddItemToCart = (id) => {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === id
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find(
                    (product) => product.id === id
                );
                updatedItems.push({
                    id: id,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }

            return {
                items: updatedItems,
            };
        });
    };

    const handleUpdateCartItemQuantity = (productId, amount) => {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === productId
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        });
    };

    const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    };

    /* The default value is set when creating the context is only
        used if a component that was not wrapped by the Provider compoent
        tries to access the context value */
    return (
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    );
};

export default CartContextProvider;
