import {
  createBrowserRouter,

} from "react-router-dom";

import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Secrat from "../Pages/Secrat/Secrat";
import PrivateRoute from "./PrivateRoute";
import Deshboard from "../Layout/Deshboard";
import Cart from "../Pages/Deshboard/Cart/Cart";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <OurMenu />
      },
      {
        path: '/ourShop/:category',
        element: <OurShop />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/secrat',
        element: <PrivateRoute><Secrat /></PrivateRoute>
      },
    ]
  },
  {
    path: 'deshboard/cart',
    element: <Deshboard />,
    children: [
      {
        path: 'cart',
        element: <Cart />
      },
    ]
  }
]);

export default router