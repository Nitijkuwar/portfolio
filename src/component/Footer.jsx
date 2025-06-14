import React from "react";
// import { FaArrowUp } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // footer
    <footer className="bg-[#2c3438] text-center text-2xl scroll p-3">
      &copy; {new Date().getFullYear()} Nitij Kuwar. All right reserve
      <a href="#" className="text-3xl"></a>
    </footer>
  );
};
{
  /* <Link
        to="home"
        className="absolute bottom-1 right-0 text-2xl bg-[#455054] text-white p-4"
      >
        <FaArrowUp />
      </Link> */
}
export default Footer;
