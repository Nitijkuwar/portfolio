import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 100);
    };

    // listen on scroll
    window.addEventListener("scroll", handleScroll);

    // extra: check scroll again after animation ends (safety)
    const timeoutId = setTimeout(() => handleScroll(), 400); // 700ms matches duration of scroll

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-[#1f2937] text-white relative py-8 px-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-6">
        {/* About Section */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-5xl font-500 mb-2">NITIJ KUWAR</h1>
          <p className="text-2xl text-gray-300">
            I’m a Frontend Developer specialized in building clean, responsive,
            and modern web interfaces using React and Tailwind CSS.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/nitij-kuwar"
            className="p-4 rounded-xl bg-gray-800 hover:bg-blue-500 transition"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://github.com/Nitijkuwar"
            className="p-4 rounded-xl bg-gray-800 hover:bg-purple-500 transition"
          >
            <FaGithub size={35} />
          </a>
          <a
            href="https://web.whatsapp.com/"
            className="p-4 rounded-xl bg-gray-800 hover:bg-green-500 transition"
          >
            <FaWhatsapp size={35} />
          </a>
        </div>
      </div>

      <hr className="my-6 border-gray-600 w-[80%] mx-auto" />

      {/* Bottom Section */}
      <div className="text-left text-xl md:text-2xl md:text-center text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Nitij Kuwar. All rights reserved.
      </div>

      {/* Scroll to Top Button */}

      {showScrollButton && (
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="fixed bottom-3 right-4 z-50 text-white bg-gray-700 hover:bg-blue-500 p-3 rounded-full cursor-pointer transition-transform duration-700 hover:rotate-[360deg]"
          aria-label="Scroll to top"
          onClick={() => {
            setTimeout(() => setShowScrollButton(false), 650); // wait for scroll to top
          }}
        >
          <FaArrowUp size={25} />
        </Link>
      )}
    </footer>
  );
};

export default Footer;
