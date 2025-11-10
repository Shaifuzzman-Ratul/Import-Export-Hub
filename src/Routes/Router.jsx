import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    },
]);
export default router;
