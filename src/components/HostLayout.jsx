import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <div className="bg-orange-50">
        <nav className="flex justify-between opacity-80 p-5 max-w-[80%] focus:font-semibold text-orange-900 text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-bold underline" : "  "
            }
            end
            to="."
          >
            Description
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-bold underline" : " "
            }
            to="income"
          >
            Income
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-bold underline" : " "
            }
            to="HostVans"
          >
            Vans
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-bold underline" : "  "
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
