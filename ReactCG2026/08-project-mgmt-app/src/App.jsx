import { Shop } from "./components/Shop.jsx";
import { Header } from "./components/Header.jsx";
import { Product } from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import { CartContextProvider } from "./store/shopping-cart-context.jsx";
import "./App.css";

export const App = () => {
    return (
        <CartContextProvider>
            <Header />
            <Shop>
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Product {...product} />
                    </li>
                ))}
            </Shop>
        </CartContextProvider>
    );
};
