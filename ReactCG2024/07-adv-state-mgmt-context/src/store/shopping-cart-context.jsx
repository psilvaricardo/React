import { createContext } from "react";

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
});
