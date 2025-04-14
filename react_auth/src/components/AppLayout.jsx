import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import {Outlet} from "react-router-dom"

export function AppLayout(){
    return <>
     <NavBar/>
     <Outlet/>
     <Footer/>
     
    </>
}