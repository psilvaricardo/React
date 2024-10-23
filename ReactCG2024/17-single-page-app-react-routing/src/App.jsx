import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

// adding route/path definition objects
const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
