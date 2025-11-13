import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Reset from "../Pages/Auth/Reset";
import Allproducts from "../Pages/Home/Allproducts";
import AddProducts from "../Pages/Home/AddProducts";
import ProductsDetails from "../Pages/Home/ProductsDetails";
import Loader from "../Pages/Loader";
import MyExport from "../Pages/Home/MyExport";
import MyImportPage from "../Pages/Home/MyImportPage";
import PrivateRoute from "../provider/PrivateRoute";
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
                loader: () => fetch('https://trade-hub-server-indol.vercel.app/products'),
                hydrateFallbackElement: <Loader></Loader>
            }, {
                path: 'add-exports',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            }
            , {
                path: '/details/:id',
                element: <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://trade-hub-server-indol.vercel.app/products/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/exports',
                element: <PrivateRoute><MyExport></MyExport></PrivateRoute>,
                loader: () => fetch('https://trade-hub-server-indol.vercel.app/exports'),
                hydrateFallbackElement: <Loader></Loader>

            },
            {
                path: '/imports',
                element: <PrivateRoute><MyImportPage></MyImportPage></PrivateRoute>,
                loader: () => fetch('https://trade-hub-server-indol.vercel.app/imports'),
                hydrateFallbackElement: <Loader></Loader>
            },
            {

            }

        ]

    },
]);
export default router;
