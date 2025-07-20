import React from "react";
import image from "../assets/image/nitij.png";
import Button from "./Button";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaRegUser,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdOutlineMail } from "react-icons/md";
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
import figma from "../assets/image/tools/Figma.png";
import bootstrap from "../assets/image/tools/Bootstrap.png";
import portfolio from "../assets/image/projects/portfolio.png";
import portgenerator from "../assets/image/projects/portgenerator.png";
import ecommerce from "../assets/image/projects/ecommerce.png";
import { IoLocationOutline } from "react-icons/io5";

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
  const tools = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "React", image: react },
    { name: "Tailwind CSS", image: tailwind },
    { name: "Postman", image: postman },
    { name: "Git", image: git },
    { name: "Figma", image: figma },
    { name: "Bootstrap", image: bootstrap },
  ];

  const project = [
    {
      image: portfolio,
      name: "Personal Portfolio",
      description: "Built with React.js and Tailwind CSS",
      tech1: "React.js",
      tech2: "Tailwind CSS",
      link: "https://portfolio-li9t1xnu6-nitijkuwars-projects.vercel.app/",
    },
    {
      image: portgenerator,
      name: "Portfolio Generator",
      description: "Built with HTML, CSS and JavaScripts",
      tech1: "HTML/CSS",
      tech2: "JavaScripts",
      link: "https://nitijkuwar.github.io/portfoliogenerator/",
    },
    {
      image: ecommerce,
      name: "Ecommerce",
      description: "Built with HTML, TailwindCSS and JavaScripts",
      tech1: "HTML/TailwindCSS",
      tech2: "JavaScripts",
      link: "https://nitijkuwar.github.io/ecommerce-js/",
    },
  ];
  return (
    <>
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-wrap gap-20 justify-evenly md:justify-evenly py-20"
      >
        <div>
          <div className="absolute top-[-50px] left-[-40px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[20px] right-[10px] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[40%] left-[45%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          {/* <div className="absolute bottom-[-2px] right-[5%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div> */}
          <div className="absolute bottom-[50%] right-[70%] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
        </div>

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
          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            className="cursor-none"
          >
            <Button btnStyle="cursor-none relative text-white text-lg font-semibold px-6 py-3 mt-5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl shine-button ">
              Hire Me
            </Button>
          </Link>{" "}
        </div>
        <img
          src={image}
          alt="nitij image"
          height="400px"
          width="400px"
          className="rounded-full "
        />
      </motion.section>
      {/* About section */}
      <motion.section
        className="relative p-10"
        id="about"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <div className="absolute top-[-80px] left-[-40px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[-75px] right-[10px] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[35%] left-[45%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          {/* <div className="absolute bottom-[-2px] right-[5%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div> */}
        </div>
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>

        <div className=" p-5 sm:p-10">
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
          <a href="/CV.pdf" download className="cursor-none">
            <Button btnStyle="cursor-none relative text-white text-lg font-semibold px-6 py-3 mt-5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl shine-button">
              Download CV
            </Button>
          </a>

          {socialLinks.map((link, index) => (
            <a key={index} href={link.href}>
              <i
                className={`${link.iconClass} cursor-none text-3xl p-2 hover:text-blue-600 rounded-full transition duration-300 `}
              ></i>
            </a>
          ))}
        </div>
      </motion.section>
      {/* skills */}

      <motion.section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-9"
        id="skills"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <div className="absolute top-[-80px] left-[-40px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[-75px] right-[10px] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[40%] left-[45%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute bottom-[30%] right-[1%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
        </div>
        <h2 className="text-center font-bold text-5xl mb-4">My Toolbox</h2>
        <p className="text-center mb-10 text-2xl ">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-9">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              className="flex flex-col items-center bg-white justify-center px-12 py-8 rounded-xl shadow-md 
               transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="object-contain w-16 h-16 mb-3"
              />
              <h3 className="text-lg font-semibold">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* projects */}
      <motion.section
        className=" relative min-h-screen flex flex-col items-center justify-center px-4 py-15"
        id="projects"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <div className="absolute top-[-80px] left-[-40px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[20px] right-[10px] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[40%] left-[45%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute bottom-[30%] right-[1%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[110px] md:h-[110px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
        </div>
        <h2 className="font-bold text-5xl">My Projects</h2>
        <p className="text-sm py-5 md:text-2xl">
          Selected work showcasing my frontend development expertise
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-12">
          {project.map((projects, index) => (
            <a
              href={projects.link}
              className="cursor-none relative shadow-md rounded-2xl overflow-hidden h-70 w-full group"
              key={index}
            >
              <img
                src={projects.image}
                alt={projects.name}
                className="h-60 w-full transition-transform duration-700 group-hover:scale-105"
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
            </a>
          ))}
        </div>
      </motion.section>
      {/* form */}
      <motion.section
        className="relative mb-10 py-5"
        id="contact"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <div className="absolute top-[-80px] left-[-40px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[-80px] right-[10px] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute top-[40%] left-[60%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute bottom-[-80px] left-[-40px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
          <div className="absolute bottom-[-2px] right-[1%] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] bg-[linear-gradient(135deg,_#fbcfe8,_#f5d0fe,_#c084fc)] rounded-full z-[-1] opacity-90 blur-[3px] animate-pulse"></div>
        </div>
        <h2 className="text-center font-bold text-3xl pb-10">Contact</h2>
        {/* Text Section */}
        <div className="flex flex-wrap justify-center gap-25 lg:flex-nowrap">
          {/* Form Section */}
          <form
            action="#"
            method="POST"
            className="space-y-4 w-full cursor-default-area cursor-default max-w-md bg-gray-100 p-6 rounded-xl shadow-md text-black border-t-10 border-indigo-500"
          >
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
            <Button
              type="submit"
              btnStyle=" cursor-none w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </Button>
          </form>

          <div className="w-full  px-4 md:px-8 lg:px-0 py-0 space-y-8 md:w-[600px]">
            {/* Contact Information */}
            <div className="rounded-xl shadow-md p-6 border-t-10 border-indigo-500">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl flex items-center">
                  <MdOutlineMail className="mr-4 text-3xl md:text-4xl text-pink-600" />
                  nitijkuwar555@gmail.com
                </p>
                <p className="text-xl md:text-2xl flex items-center">
                  <IoLocationOutline className="mr-4 text-3xl md:text-4xl text-green-600" />
                  Tankisinwari, Nepal
                </p>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="rounded-xl shadow-md p-6 border-t-10 border-indigo-500">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Connect With Me
              </h2>
              <div className="flex flex-col sm:flex-row sm:justify-start sm:gap-8 gap-4">
                <a
                  href="https://www.linkedin.com/in/nitij-kuwar"
                  className="flex flex-col items-center text-xl md:text-3xl group cursor-pointer"
                >
                  <span className="p-3 group-hover:bg-blue-500 rounded-xl group-hover:text-white">
                    {" "}
                    <FaLinkedin />
                  </span>
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Nitijkuwar"
                  className="flex flex-col items-center text-xl md:text-3xl group"
                >
                  <span className="p-3 group-hover:bg-blue-200 rounded-xl ">
                    <FaGithub />
                  </span>
                  GitHub
                </a>
                <a
                  href="https://web.whatsapp.com/"
                  className="flex items-center flex-col text-xl group md:text-3xl"
                >
                  <span className="p-3 group-hover:bg-green-500 rounded-xl group-hover:text-white">
                    <FaWhatsapp />
                  </span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
