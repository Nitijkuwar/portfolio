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
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
