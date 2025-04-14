import { NavLink, useNavigate } from "react-router-dom";

export function NavBar() {
    const navigate=useNavigate()
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-bold underline"
      : "font-medium hover:underline";

  return (
    <div className="bg-purple-600 flex justify-between items-center px-6 py-3 text-white">
      {/* Logo on the left */}
     <button> <h1 onClick={()=>{navigate("/signup")}}  className="text-xl font-bold">React Auth</h1></button>

      {/* Links and button on the right */}
      <div className="flex items-center space-x-6">
        <NavLink to="/login" className={navLinkClass}>
          Login
        </NavLink>
        <NavLink to="/profile" className={navLinkClass}>
          Profile
        </NavLink>
        <button className="bg-white text-purple-600 font-semibold px-4 py-1 rounded hover:bg-purple-100 transition">
          Logout
        </button>
      </div>
    </div>
  );
}
