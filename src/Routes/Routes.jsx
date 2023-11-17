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
import AllUser from "../Pages/Dashboard/AllUsers/AllUser";


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
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [

        {
           path:'cart',
          element:<Cart></Cart>

        },

        //admin routes
        {
           path:'allUsers',
          element:<AllUser></AllUser>

        },
        {
           path:'cart',
          element:<Cart></Cart>

        },
        {
           path:'cart',
          element:<Cart></Cart>

        }




      ]
    }


  ]);


  export default router ;