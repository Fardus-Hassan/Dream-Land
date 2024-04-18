import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Root from '../Pages/Root';
import Error from '../Components/Error/Error';
import Register from '../Pages/Register';
import LoginPage from '../Pages/LoginPage';
import UpdateProfile from '../Pages/UpdateProfile';
import PrivateRoute from './PrivateRoute';
import Details from '../Pages/Details';
import ContactUs from '../Pages/ContactUs';
import AllProperties from '../Pages/AllProperties';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <LoginPage /> },
            {
                path: '/update-profile',
                element: (
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                ),
            },
            {
                path: '/contact',
                element: (
                    <PrivateRoute>
                        <ContactUs />
                    </PrivateRoute>
                ),
            },
            { path: '/all-properties', element: <AllProperties />, loader: () => fetch('/data.json') },
            {
                path: '/details/:id',
                element: (
                    <PrivateRoute>
                        <Details />
                    </PrivateRoute>
                ),
                loader: () => fetch('/data.json'),
            },
        ],
    },
]);

export default router;
