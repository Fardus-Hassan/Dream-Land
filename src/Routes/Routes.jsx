import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Error from "../Components/Error/Error";
import Register from "../Pages/Register";
import LoginPage from "../Pages/LoginPage";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details";
import ContactUs from "../Pages/ContactUs";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
            {
                path: "/update-profile",
                element: <PrivateRoute> <UpdateProfile></UpdateProfile></PrivateRoute>,
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>,
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ()=> fetch("/data.json")
            },
        ],
    },

]);

export default router