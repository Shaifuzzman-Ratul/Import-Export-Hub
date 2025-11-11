import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Reset from "../Pages/Auth/Reset";
import Allproducts from "../Pages/Home/Allproducts";
import AddProducts from "../Pages/Home/AddProducts";
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
            }, {
                path: '/forget',
                element: <Reset></Reset>
            },
            {
                path: '/all-products',
                element: <Allproducts></Allproducts>,
                loader: () => fetch('http://localhost:3000/products')
            }, {
                path: 'add-exports',
                element: <AddProducts></AddProducts>
            }
        ]

    },
]);
export default router;
