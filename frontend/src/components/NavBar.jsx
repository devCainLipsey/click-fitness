import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black py-4 border-b-2 border-red-600">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-bold">
            Your Logo
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center">
          <a href="#section1" className="text-white mr-4 hover:text-red-600">
            Section 1
          </a>
          <a href="#section2" className="text-white mr-4 hover:text-red-600">
            Section 2
          </a>
          <a href="#section3" className="text-white mr-4 hover:text-red-600">
            Section 3
          </a>
          <a href="#section4" className="text-white mr-4 hover:text-red-600">
            Section 4
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
