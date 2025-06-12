import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    // footer
    <footer className="bg-[#2c3438] text-center text-xl scroll ">
      &copy; {new Date().getFullYear()} Nitij Kuwar. All right reserve
      <a href="#" className="text-3xl">
        <FaArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
