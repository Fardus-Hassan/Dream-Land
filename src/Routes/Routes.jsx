import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Error from "../Components/Error/Error";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ],
    },

]);

export default router