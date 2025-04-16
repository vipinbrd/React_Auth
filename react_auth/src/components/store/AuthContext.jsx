import { createContext, useState } from "react";

export const store=createContext()
export function AuthContext({children}){
   const storedToken=JSON.parse(localStorage.getItem("token"))||{}
   console.log(storedToken)
  const [token,setToken]=useState(storedToken);
  
  
  return <store.Provider value={{token,setToken}}>{children}</store.Provider>



}