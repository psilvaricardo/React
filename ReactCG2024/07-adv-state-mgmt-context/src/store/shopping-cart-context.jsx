import { createContext, useReducer } from "react";
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

const shoppingCartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
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
                (product) => product.id === action.payload
            );
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }

        return {
            items: updatedItems,
        };
    } 
    
    if (action.type === "UPDATE_ITEM") {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
        };
    }

    return state;
};

/* Outsourcing context and state into a separate provider component */
const CartContextProvider = ({ children }) => {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(
        shoppingCartReducer,
        {
            items: [],
        }
    );

    const handleAddItemToCart = (id) => {
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id,
        });
    };

    const handleUpdateCartItemQuantity = (productId, amount) => {
        shoppingCartDispatch({
            type: "UPDATE_ITEM",
            payload: {
                productId,
                amount,
            },
        });
    };

    const ctxValue = {
        items: shoppingCartState.items,
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
