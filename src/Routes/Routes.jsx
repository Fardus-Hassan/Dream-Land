import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Error from "../Components/Error/Error";
import Register from "../Pages/Register";
import LoginPage from "../Pages/LoginPage";



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
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>,
            },
        ],
    },

]);

export default router