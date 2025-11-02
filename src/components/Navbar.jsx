import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-orange-50 shadow px-4 py-6">
      <h1 className="font-black text-4xl">
        <Link to="/">#VANLIFE</Link>
      </h1>
      <div className="flex justify-between gap-4 font-semibold text-gray-700">
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-gray-800 " : "hover:underline"
          }
          to="/about"
          end
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-gray-800 " : "hover:underline"
          }
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-gray-800 " : "hover:underline"
          }
          to="/host"
        >
          Host
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
