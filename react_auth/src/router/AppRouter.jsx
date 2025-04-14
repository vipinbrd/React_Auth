import { RouterProvider } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import { Error } from "../components/Error";
import { SignUp } from "../components/SignUp";
import { Login } from "../components/Login";
import { Profile } from "../components/Profile";
import { Protected } from "../components/Protected";

export function AppRouter(){
 const router=createBrowserRouter([
   { errorElement:<Error/>,
     path:'/',
     element:<AppLayout/>,
     children:[
        {
            index:true,
            element:<SignUp/>
        },
        {
            path:"signup",
            element:<SignUp/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"profile",
            element: <Protected><Profile/></Protected>
        }
      
     ]

   }


 ])


 return <RouterProvider router={router}></RouterProvider>

}