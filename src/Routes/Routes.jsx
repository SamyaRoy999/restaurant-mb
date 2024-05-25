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



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/menu',
            element: <OurMenu/>
        },
        {
          path: '/ourShop/:category',
          element: <OurShop/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        {
            path: '/secrat',
            element: <PrivateRoute><Secrat/></PrivateRoute> 
        },
      ]
    },
  ]);

  export default router