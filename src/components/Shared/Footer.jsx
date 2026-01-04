import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-base-100  border-t border-gray-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-4 py-12 grid md:grid-cols-4 gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="flex items-center gap-2 mb-2">
            <img src={logo} alt="LearnSphere Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold ">LearnSphere</h2>
          </div>
          <p className="text-sm opacity-80 max-w-sm">
            Empowering learners and educators through engaging, modern, and
            accessible learning experiences.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <a href="/" className="hover:text-primary transition">
              Home
            </a>
            <a href="/courses" className="hover:text-primary transition">
              Courses
            </a>
            <a href="/blogs" className="hover:text-primary transition">
              Blogs
            </a>
            <a href="/dashboard" className="hover:text-primary transition">
              Dashboard
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-indigo-600" />
            <span>Mirsharai, Chittagong, Bangladesh</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-indigo-600" />
            mneshat7@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-indigo-600" />
            +880 1837 889646
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
          <div className="flex gap-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-indigo-200 hover:bg-indigo-300 transition text-indigo-600"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-indigo-200 hover:bg-indigo-300 transition text-indigo-600"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-indigo-200 hover:bg-indigo-300 transition text-indigo-600"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-indigo-200 hover:bg-indigo-300 transition text-indigo-600"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200 py-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} LearnSphere — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
