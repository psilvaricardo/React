import { useReducer } from "react";
import { CartContext } from "./shopping-cart-context"
import { DUMMY_PRODUCTS } from "../dummy-products";

const shoppingCartReducer = (state, action) => {
    const updatedItems = [...state.items];

    switch (action.type) {

        case "ADD_ITEM": {
            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === action.payload,
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
                    (product) => product.id === action.payload,
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

        case "UPDATE_ITEM": {
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === action.payload.productId,
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

        default:
            return state;
    }
};

/* Outsourcing context and state into a separate provider component */
export const CartContextProvider = ({ children }) => {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(
        shoppingCartReducer,
        {
            items: [],
        },
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

