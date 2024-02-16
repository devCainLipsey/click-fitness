import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black py-4 border-b-2 border-red-600">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <RouterLink
            to="/"
            className="flex items-center text-white text-xl font-bold cursor-pointer"
          >
            <FaDumbbell className="mr-2" size={32} />
            Click Fitness
          </RouterLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="plans"
            spy={true}
            smooth={true}
            offset={-5}
            duration={500}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            Plans
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
