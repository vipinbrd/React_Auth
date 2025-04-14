import { createContext, useState } from "react";

export const store=createContext()
export function AuthContext({children}){
  const [token,setToken]=useState({});
  
  
  return <store.Provider value={{token,setToken}}>{children}</store.Provider>



}