import React from "react";
import image2 from "../assets/image/nitij2.jpg";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { FaPhone, FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const About = () => {
  return (
    <section className="pl-25 pr-25" id="about">
      <h2 className="text-4xl font-bold mb-6 text-gray-200 text-center">
        About Me
      </h2>
      <div className="flex gap-20 p-10">
        <img
          src={image2}
          alt="aboutimage"
          height="350px"
          width="350px"
          className="rounded-xl"
        />
        <div>
          <p className="text-gray-200 text-2xl leading-[1.6] ">
            An enthusiastic front-end developer who focusses on utilising
            React.js to create cutting-edge, responsive web apps. I like
            transforming concepts into elegant, useful designs, and I'm always
            looking to sharpen my abilities and keep up with emerging
            technologies.
          </p>
          {/* information */}
          <div className="text-black text-2xl grid grid-cols-2 pt-4 pb-3">
            <p className="font-bold pb-2 flex text-xl">
              <FaRegUser className="text-blue-400 mt-2 mr-2" />
              <span className="font-normal text-gray-200">Nitij Kuwar</span>
            </p>
            <p className="font-bold flex">
              <MdEmail className="text-blue-400 mt-2 mr-2 text-xl" />
              <span className="font-normal text-gray-200 text-2xl">
                nitijkuwar555@gmail.com
              </span>
            </p>
            <p className="font-bold flex">
              <FaPhone className="text-blue-400 mt-2 mr-2 text-xl" />
              <span className="font-normal text-gray-200 text-2xl">
                9815305931
              </span>
            </p>
            <p className="font-bold flex">
              <FaLocationDot className="text-blue-400 mt-2 mr-2 text-xl" />
              <span className="font-normal text-gray-200 text-2xl">
                Tankisinwari-1,Budhiganga
              </span>
            </p>
          </div>
          <a href="/os-chatgpt-note" download>
            <Button btnStyle="border text-gray-100 p-3 text-xl font-xl cursor-pointer">
              Download CV
            </Button>
          </a>

          <Link to="https://www.facebook.com/">
            <i className="fa-brands fa-facebook text-3xl"></i>
          </Link>
          <Link to="https://www.linkedin.com/">
            <i className="fa-brands fa-linkedin p-3 text-3xl"></i>
          </Link>
          <Link to="https://www.instagram.com/">
            <i className="fa-brands fa-instagram text-3xl"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
