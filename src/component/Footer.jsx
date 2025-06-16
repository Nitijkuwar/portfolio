import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    // footer
    <section className="relative text-white">
      <footer className="bg-[#1f2937] text-center text-2xl scroll p-3">
        &copy; {new Date().getFullYear()} Nitij Kuwar. All right reserve
        <a href="#" className="text-3xl"></a>
      </footer>
      <Link
        to="home"
        smooth={true}
        duration={600}
        className="absolute bottom-1 right-0 text-2xl  p-4 cursor-pointer"
      >
        <FaArrowUp />
      </Link>
    </section>
  );
};
{
}
export default Footer;
