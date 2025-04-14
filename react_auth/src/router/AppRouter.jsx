import { RouterProvider } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import { Error } from "../components/Error";
import { SignUp } from "../components/SignUp";

export function AppRouter(){
 const router=createBrowserRouter([
   { errorElement:<Error/>,
     path:'/',
     element:<AppLayout/>,
     children:[
        {
            index:true,
            element:<SignUp/>
        }
      
     ]

   }


 ])


 return <RouterProvider router={router}></RouterProvider>

}