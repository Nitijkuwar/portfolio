import React from "react";
import image from "../assets/image/nitij.png";
import image2 from "../assets/image/nitesh.jpg";
import Button from "./Button";
import { FaPhone, FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import html from "../assets/image/tools/html.png";
import css from "../assets/image/tools/css.png";
import git from "../assets/image/tools/git.png";
import js from "../assets/image/tools/javascript.png";
import postman from "../assets/image/tools/postman.png";
import react from "../assets/image/tools/react.png";
import tailwind from "../assets/image/tools/tailwind.png";
import portfolio from "../assets/image/projects/portfolio.png";
import portgenerator from "../assets/image/projects/portgenerator.png";

const Home = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/",
      iconClass: "fa-brands fa-facebook",
    },
    {
      href: "https://www.linkedin.com/",
      iconClass: "fa-brands fa-linkedin",
    },
    {
      href: "https://www.instagram.com/",
      iconClass: "fa-brands fa-instagram",
    },
  ];

  // const skills = [
  //   { name: "HTML", level: 90, color: "bg-orange-500" },
  //   { name: "CSS", level: 85, color: "bg-blue-500" },
  //   { name: "JavaScript", level: 70, color: "bg-yellow-400" },
  //   { name: "React", level: 60, color: "bg-cyan-500" },
  //   { name: "Tailwind CSS", level: 75, color: "bg-sky-500" },
  // ];
  const tools = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "React", image: react },
    { name: "Tailwind CSS", image: tailwind },
    { name: "Postman", image: postman },
    { name: "Git", image: git },
  ];
  const project = [
    {
      image: portfolio,
      name: "Personal Portfolio",
      description: "Built with React.js and Tailwind CSS",
      tech1: "React.js",
      tech2: "Tailwind CSS",
    },
    {
      image: portgenerator,
      name: "Portfolio Generator",
      description: "Built with HTML, CSS and JavaScripts",
      tech1: "HTML/CSS",
      tech2: "JavaScripts",
    },
  ];
  return (
    <>
      <motion.section
        id="home"
        className="flex flex-wrap gap-20 justify-evenly md:justify-around py-15"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <p className="text-5xl">I'm</p>
          <h3 className="text-4xl md:text-8xl lg:text-8xl xl:text-9xl leading-tight md:leading-[1.5]">
            Nitij Kuwar
          </h3>
          <div className="text-2xl md:text-6xl lg:text-6xl pb-2">
            <Typewriter
              options={{
                strings: ["Frontend Developer"],
                autoStart: true,
                loop: true,
                delay: 180,
              }}
            />
          </div>

          <Button btnStyle="border p-3 font-2xl mt-5 cursor-pointer">
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
      </motion.section>
      <hr />
      {/* About section */}
      <motion.section
        className="p-10"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <div className="flex justify-center gap-20 p-5 sm:p-10 flex-wrap lg:flex-nowrap lg:justify-normal">
          <img
            src={image2}
            alt="aboutimage"
            height="350px"
            width="350px"
            className="rounded-xl md:text-center"
          />
          <div>
            <p className=" text-xl text-justify leading-[1.6] lg:text-2xl">
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
                <span className="font-normal">Nitij Kuwar</span>
              </p>
              <p className="font-bold flex items-center">
                <MdEmail className="text-blue-400 mr-2 text-3xl" />
                <span className="font-normal break-all">
                  nitijkuwar555@gmail.com
                </span>
              </p>
              <p className="font-bold flex items-center">
                <FaPhone className="text-blue-400 mr-2 text-3xl" />
                <span className="font-normal">9815305931</span>
              </p>
              <p className="font-bold flex items-center">
                <FaLocationDot className="text-blue-400 mr-2 text-3xl" />
                <span className="font-normal">Tankisinwari-1, Budhiganga</span>
              </p>
            </div>
            <a href="/CV.pdf" download>
              {" "}
              <Button btnStyle="border text-gray-400 p-3 text-xl font-xl cursor-pointer">
                Download CV
              </Button>
            </a>

            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`${link.iconClass} text-3xl p-2 cursor-pointer hover:text-blue-600 rounded-full transition duration-300`}
                ></i>
              </a>
            ))}
          </div>
        </div>
      </motion.section>
      <hr />
      {/* skills */}

      {/* <motion.section
        className="min-h-screen flex items-center justify-center px-6"
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-3xl">
          <h2 className="text-center font-bold text-3xl mb-10">My Skills</h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2 text-base sm:text-lg">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
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
      </motion.section> */}
      <hr />
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center px-4"
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-center font-bold text-5xl mb-4">My Toolbox</h2>
        <p className="text-center mb-10 text-2xl ">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-9">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#fff] justify-center px-12 py-8 rounded-xl shadow-md hover:scale-110 transition-transform duration-600"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="object-contain w-16 h-16 mb-3"
              />
              <h3 className="text-lg font-semibold">{tool.name}</h3>
            </div>
          ))}
        </div>
      </motion.section>
      <hr />
      {/* projects */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center px-4 py-15"
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-bold text-5xl">My Projects</h2>
        <p className="text-sm py-5 md:text-2xl">
          Selected work showcasing my frontend development expertise
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 gap-12">
          {project.map((projects, index) => (
            <div
              className="relative shadow-md rounded-2xl overflow-hidden h-70 w-full group"
              key={index}
            >
              <img
                src={projects.image}
                alt={projects.name}
                className="h-60 w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-opacity-80 w-full">
                <h3 className="text-xl font-bold md:text-2x">
                  {projects.name}
                </h3>
                <p className="text-gray-700 text-sm md:text-lg">
                  {projects.description}
                </p>
                <div className="flex ">
                  <p className=" mr-3 py-1 px-3 rounded-full bg-gray-300">
                    {projects.tech1}
                  </p>
                  <p className=" mr-3 py-1 px-3 rounded-3xl bg-gray-300">
                    {projects.tech2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <hr />
      {/* form */}
      <motion.section
        className=" mb-10 py-5"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
      </motion.section>
    </>
  );
};

export default Home;
