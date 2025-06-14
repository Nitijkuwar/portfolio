import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2c3438] text-white sticky top-0 z-50 cursor-pointer">
      <div className="flex justify-around text-3xl items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="home"
          className="text-3xl font-bold"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
        >
          <span className="text-[#5c6e73]">My</span> Portfolio
        </Link>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-10">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active-link"
            className="relative text-gray-300 transition-all duration-300 hover: after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active-link"
            className="relative text-gray-300 transition-all duration-300 hover: after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active-link"
            className="relative text-gray-300 transition-all duration-300 hover: after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active-link"
            className="relative text-gray-300 transition-all duration-300 hover: after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 sm:hidden text-3xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active-link"
            onClick={() => setIsOpen(false)}
            className="relative text-gray-300 transition-all duration-300 hover: after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active-link"
            onClick={() => setIsOpen(false)}
            className="relative text-gray-300 transition-all duration-300 hover: after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active-link"
            onClick={() => setIsOpen(false)}
            className="relative text-gray-300 transition-all duration-300 hover: after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active-link"
            onClick={() => setIsOpen(false)}
            className="relative text-gray-300 transition-all duration-300 after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
