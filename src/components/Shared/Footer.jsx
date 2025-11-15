import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import logo from "../../assets/logo.svg"; // 👈 your logo path

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <img src={logo} alt="SkillGro Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold text-primary">LearnSphere</h2>
          </div>
          <p className="text-sm opacity-70 max-w-sm">
            Empowering learners and educators through engaging, modern, and
            accessible learning experiences.
          </p>
        </div>

        {/*Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-base-100 hover:bg-primary hover:text-gray-900 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-base-100 hover:bg-primary hover:text-gray-900 transition"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-base-100 hover:bg-primary hover:text-gray-900 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-base-100 hover:bg-primary hover:text-gray-900 transition"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-base-300 py-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} LearnSphere — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
