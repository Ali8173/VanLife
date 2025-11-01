import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center shadow px-4 py-6">
      <h1 className="font-black text-4xl">
        <Link to="/">#VANLIFE</Link>
      </h1>
      <div className="flex justify-between gap-4 font-semibold text-gray-700">
        <Link to="/about">About</Link>
        <Link to="/">Vans</Link>
      </div>
    </nav>
  );
};

export default Navbar;
