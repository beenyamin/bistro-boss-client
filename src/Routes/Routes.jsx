import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Footer/Secret/Secret";
import DashBoard from "../Layouts/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[

        {
          path:'/',
          element:<Home></Home>

        },

        {
          path:'menu',
          element:<Menu></Menu>

        },

        {
          path:'order/:category',
          element:<Order></Order>


        },
     

        {
          path:'/login',
          element:<Login></Login>

        },

        {
          path:'/signUp',
          element:<SignUp></SignUp>

        },
        
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>

        }



      ]
    },


    {
      path:'dashboard',
      element:<DashBoard></DashBoard>,
      children: [

        {
           path:'cart',
          element:<Cart></Cart>

        }
      ]
    }


  ]);


  export default router ;