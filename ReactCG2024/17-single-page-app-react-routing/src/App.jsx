import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

// we pass an array of route definition 
// objects, each of them represent a route.
// https://reactrouter.com/home 
const router = createBrowserRouter([
    { path: "/", element: <HomePage /> }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
