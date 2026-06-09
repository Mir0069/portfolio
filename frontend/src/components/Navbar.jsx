import { NavLink } from "react-router-dom";

const Navbar = () => {
 
    
    
  return (
      
    <div className="flex justify-around pt-6 ">
    <div className="  items-center fixed  w-[50%] justify-between rounded-3xl px-8 py-4  bg-black opacity-5  shadow-sm">
    <div>p</div>
    </div>
    <div className="flex  items-center fixed w-[50%] justify-between rounded-3xl px-8 py-4 bg-transparent  ">

      {/* Logo */}
      <div>
    
      {/* Menu Links */}
      <ul className="flex pl-6 space-x-8 text-gray-700 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
          

      </div>
    </div>
    </div>
  );
};

export default Navbar;