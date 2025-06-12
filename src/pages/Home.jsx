import React from "react";
import image from "../assets/image/nitij.jpg";
import image2 from "../assets/image/nitesh.jpg";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { FaPhone, FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Home = () => {
  const skills = [
    { name: "HTML", level: 90, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-500" },
    { name: "JavaScript", level: 70, color: "bg-yellow-400" },
    { name: "React", level: 60, color: "bg-cyan-500" },
    { name: "Tailwind CSS", level: 75, color: "bg-sky-500" },
  ];
  return (
    <>
      <div
        id="home"
        className="flex flex-wrap justify-evenly md:justify-center bg-[#455054] p-10 pt-20"
      >
        <div>
          <p className="text-5xl">I'm</p>
          <h3 className="text-4xl md:text-8xl lg:text-8xl xl:text-9xl leading-tight md:leading-[1.5]">
            Nitij Kuwar
          </h3>

          <div className="text-2xl md:text-6xl lg:text-6xl pb-2">
            Frontend developer
          </div>

          <Button btnStyle="border p-2 font-2xl">
            <Link to="contact">Contact Me</Link>
          </Button>
        </div>
        <img
          src={image}
          alt="nitij image"
          height="400px"
          width="400px"
          className="rounded-full"
        />
      </div>
      <hr />
      {/* About section */}
      <section className="pl-10 pr-10" id="about">
        <h2 className="text-4xl font-bold mb-6 text-gray-200 text-center">
          About Me
        </h2>
        <div className="flex justify-center gap-20 p-5 sm:p-10 flex-wrap lg:flex-nowrap lg:justify-normal">
          <img
            src={image2}
            alt="aboutimage"
            height="350px"
            width="350px"
            className="rounded-xl md:text-center"
          />
          <div>
            <p className="text-gray-200 text-xl text-justify leading-[1.6] lg:text-2xl">
              An enthusiastic front-end developer who focusses on utilising
              React.js to create cutting-edge, responsive web apps. I like
              transforming concepts into elegant, useful designs, and I'm always
              looking to sharpen my abilities and keep up with emerging
              technologies.
            </p>
            {/* information */}
            <div className="text-black text-2xl grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-4 pb-3">
              <p className="font-bold flex items-center">
                <FaRegUser className="text-blue-400 mr-2 text-3xl" />
                <span className="font-normal text-gray-200">Nitij Kuwar</span>
              </p>
              <p className="font-bold flex items-center">
                <MdEmail className="text-blue-400 mr-2 text-3xl" />
                <span className="font-normal text-gray-200 break-all">
                  nitijkuwar555@gmail.com
                </span>
              </p>
              <p className="font-bold flex items-center">
                <FaPhone className="text-blue-400 mr-2 text-3xl" />
                <span className="font-normal text-gray-200">9815305931</span>
              </p>
              <p className="font-bold flex items-center">
                <FaLocationDot className="text-blue-400 mr-2 text-3xl" />
                <span className="font-normal text-gray-200">
                  Tankisinwari-1, Budhiganga
                </span>
              </p>
            </div>

            <Button btnStyle="border text-gray-400 p-3 text-xl font-xl cursor-pointer">
              Download CV
            </Button>
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
      <hr />
      {/* skills */}

      <div
        className="min-h-screen flex items-center justify-center px-6"
        id="skills"
      >
        <div className="w-full max-w-3xl">
          <h2 className="text-center font-bold text-3xl mb-10">My Skills</h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2 text-base sm:text-lg">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-100">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-md overflow-hidden">
                  <div
                    className={`${skill.color} h-4 rounded-md`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      {/* form */}
      <div className=" mb-10" id="contact">
        <h2 className="text-center font-bold text-3xl pb-10">Contact</h2>
        {/* Text Section */}
        <div className="flex flex-wrap justify-center lg:flex-nowrap">
          <div className=" w-150 bg-[#4a5c5e] text-white content-center rounded-lg lg:w-120 h-120">
            <p className="text-lg mb-2 ml-20">Hello 👋</p>
            <h3 className="text-3xl font-semibold ml-20">
              <span className="text-indigo-300">Please</span> fill up the form
            </h3>
            <h3 className="text-3xl font-semibold ml-20">
              and send the <span className="text-indigo-300">message</span>
            </h3>
          </div>

          {/* Form Section */}
          <div className="w-full max-w-md bg-gray-100 p-6 rounded-xl shadow-md text-black">
            <form action="#" method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
