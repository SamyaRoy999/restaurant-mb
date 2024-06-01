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
import AllUser from "../Pages/AllUser/AllUser";
import AddItems from "../Pages/Deshboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManegeItem from "../Pages/Deshboard/ManegeItem/ManegeItem";
import Payment from "../Pages/Deshboard/Payment/Payment";





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
    path: 'deshboard',
    element: <PrivateRoute><Deshboard /></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'payment',
        element: <Payment />
      },

      // admin user

      {
        path: 'addItems',
        element: <AdminRoute> <AddItems /> </AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute> <ManegeItem /> </AdminRoute>
      },

      {
        path: 'user',
        element: <AdminRoute><AllUser /></AdminRoute>
      }
    ]
  }
]);

export default router