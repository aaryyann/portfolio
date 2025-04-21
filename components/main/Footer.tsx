"use client";
import React from "react";
import { GlobeDemo } from "./GlobeDemo"; // Adjust the path if needed
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function FooterWithGlobe() {
  return (
    <footer className="w-full bg-black text-white px-6 py-10">
      <div className=" mx-auto md:mx-40 grid md:grid-cols-2">
        {/* Left: Socials + Contact Form */}
        <div className="flex flex-col gap-6">
          {/* Socials */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-xl md:text-4xl font-semibold">Let's Build Together</h3>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077b5] transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6e5494] transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-4 w-full max-w-md">
            <h4 className="text-lg font-medium">Send a Message</h4>
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 py-2 px-4 rounded-md text-white font-semibold"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right: Globe */}
        <div className="w-full flex justify-center md:justify-end">
          <GlobeDemo />
        </div>
      </div>
    </footer>
  );
}
