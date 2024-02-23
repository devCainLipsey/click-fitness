import React, { useState } from "react";
import { FaDumbbell, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const [isSticky, setSticky] = useState(true); // Set initial state to true
  const [showMenu, setShowMenu] = useState(false); // State to manage the mobile menu

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

  // Function to handle link click (closes the menu)
  const handleLinkClick = () => {
    setShowMenu(false);
  };

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

        {/* Hamburger Menu (shown for smaller screens) */}
        <div className="md:hidden">
          <FaBars
            className="text-white text-3xl cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="text-5xl flex flex-col items-center">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="text-white py-4 hover:text-red-600 cursor-pointer"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={800}
                className="text-white py-4 hover:text-red-600 cursor-pointer"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                to="programs"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="text-white py-4 hover:text-red-600 cursor-pointer"
                onClick={handleLinkClick}
              >
                Programs
              </Link>
              <Link
                to="plans"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="text-white py-4 hover:text-red-600 cursor-pointer"
                onClick={handleLinkClick}
              >
                Plans
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className="text-white py-4 hover:text-red-600 cursor-pointer"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <div className="hidden md:flex items-center text-xl">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={800}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="programs"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            Programs
          </Link>
          <Link
            to="plans"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className="text-white mr-4 hover:text-red-600 cursor-pointer"
          >
            Plans
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
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
