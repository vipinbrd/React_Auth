import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { store } from "./store/AuthContext";

export function NavBar() {
    const navigate=useNavigate()
    const {token,setToken}=useContext(store)
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-bold underline"
      : "font-medium hover:underline";
  const isLoggedIn=Object.keys(token).length>0
  return (
    <div className="bg-purple-600 flex justify-between items-center px-6 py-3 text-white">

     <button> <h1 onClick={()=>{navigate("/signup")}}  className="text-xl font-bold">React Auth</h1></button>

   
      <div className="flex items-center space-x-6">
       {!isLoggedIn&& <NavLink to="/login" className={navLinkClass}>
          Login
        </NavLink>
}
         { isLoggedIn&&( 
            <>
        <NavLink to="/profile" className={navLinkClass}>
          Profile
        </NavLink>
        <button onClick={()=>{setToken({})}} className="bg-white text-purple-600 font-semibold px-4 py-1 rounded hover:bg-purple-100 transition">
          Logout
        </button>
        </>)}
       
      </div>
    </div>
  );
}
