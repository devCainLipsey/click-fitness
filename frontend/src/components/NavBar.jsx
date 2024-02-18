import React, { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const [isSticky, setSticky] = useState(true); // Set initial state to true

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // Add scroll event listener directly within the component
  // This attaches the event listener when the component is mounted
  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={`py-4 border-b-2 border-red-600 ${
        isSticky
          ? "fixed top-0 inset-x-0 bg-black z-50 transition-all duration-300 ease-in-out"
          : "bg-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <RouterLink
            to="/"
            className="flex items-center text-white text-3xl font-bold cursor-pointer"
          >
            <FaDumbbell className="mr-2" size={40} />
            Click Fitness
          </RouterLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center text-xl">
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
            offset={-60}
            duration={500}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="plans"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            Plans
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
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
