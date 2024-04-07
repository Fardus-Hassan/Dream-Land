import {
    createBrowserRouter,
} from "react-router-dom";
import Error from "../Components/Error/Error";
import Root from "../Pages/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <h1>Home page</h1>,
            },
        ],
    },

]);

export default router