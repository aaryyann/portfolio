"use client";
import React from "react";
import { GlobeDemo } from "./GlobeDemo"; // Adjust the path if needed
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function FooterWithGlobe() {
  return (
    <footer className="w-full bg-black text-white px-6 py-10 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Socials */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-xl md:text-2xl font-semibold">Connect with me</h3>
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

        {/* Right: Globe */}
        
        <GlobeDemo />
        
      </div>
    </footer>
  );
}
