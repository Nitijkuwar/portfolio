import React from "react";

const Contact = () => {
  return (
    <div className=" justify-center mb-10 min-h-screen" id="contact">
      <h2 className="text-center font-bold text-3xl p-10">Contact</h2>
      {/* Text Section */}
      <div className="flex justify-center">
        <div className=" w-120 h-120 bg-[#4a5c5e] text-white content-center rounded-lg">
          <p className="text-lg mb-2 ml-20">
            Hello <span className="bounce 4s">👋</span>
          </p>
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
  );
};

export default Contact;
