import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav className="bg-[#1f2937] text-white sticky top-0 z-50 cursor-default-area cursor-default">
      <div className="flex justify-between text-3xl items-center px-6 py-4 lg:justify-around">
        <div className="text-3xl select-none">
          {" "}
          <span className="text-[#5c6e73]">Nitij</span> <span>Kuwar</span>
        </div>
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10">
          {nav.map((navbar, index) => (
            <Link
              key={index}
              to={navbar.link}
              smooth={true}
              duration={500}
              spy={true}
              offset={-90}
              activeClass="active-link"
              className="relative cursor-default cursor-pointer transition-all duration-700  hover: after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-[#e5e7eb] after:transition-all after:duration-700 hover:after:w-full"
            >
              {navbar.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 lg:hidden text-3xl">
          {nav.map((navbar, index) => (
            <Link
              key={index}
              to={navbar.link}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active-link"
              onClick={() => setIsOpen(false)}
              className="relative cursor-pointer transition-all duration-300 hover:after:absolute after:left-0 after:top-10 after:h-[3px] after:w-0 after:bg-[#e5e7eb] after:transition-all after:duration-300 hover:after:w-full"
            >
              {navbar.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
