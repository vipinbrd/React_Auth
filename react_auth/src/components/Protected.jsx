import { useContext } from "react";
import { store } from "./store/AuthContext";
import { Navigate } from "react-router-dom";

export function Protected({children}){
    const{token}=useContext(store)
    

    const isLoggedIn=Object.keys(token).length>0;
    if(!isLoggedIn){
      return  <Navigate to="/signup" replace/>
    }

    return children;

}