import { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="hidden lg:flex bg-primary py-4 text-white text-sm">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4">
          {/* Left */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>Mirsharai, Chittagong, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <span>mneshat7@gmail.com</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <span>
                Call us: <strong>+880 1837 889646</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span>Follow Me On :</span>
              <div className="flex gap-3">
                <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
                <FaXTwitter className="cursor-pointer hover:text-yellow-400" />
                <FaWhatsapp className="cursor-pointer hover:text-yellow-400" />
                <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
                <FaYoutube className="cursor-pointer hover:text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white py-5 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 lg:px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="LearnSphere Logo" className="h-10 w-auto" />
            <div>
              <h2 className="text-xl font-bold text-[#141047]">LearnSphere</h2>
              <p className="text-xs text-gray-500 -mt-1">
                Learn. Grow. Succeed.
              </p>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex gap-8 text-black font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-pritext-primary pb-1"
                  : "hover:text-yellow-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-pritext-primary pb-1"
                  : "hover:text-yellow-500"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "hover:text-yellow-500"
              }
            >
              Dashboard
            </NavLink>
          </nav>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button className="btn-secondary">Log in</button>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-3 border border-gray-300 rounded-full"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars className="text-[#141047]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8 w-auto" />
            <div>
              <h2 className="text-lg font-bold text-[#141047]">LearnSphere</h2>
              <p className="text-xs text-gray-500 -mt-1">
                Learn. Grow. Succeed.
              </p>
            </div>
          </div>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-[#141047]" />
          </button>
        </div>

        <div className="p-4">
          {/* Menu Items */}
          <nav className="flex flex-col gap-3 text-[#141047] font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-pritext-primary pb-1"
                  : "hover:text-yellow-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-pritext-primary pb-1"
                  : "hover:text-yellow-500"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "hover:text-yellow-500"
              }
            >
              Dashboard
            </NavLink>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6 border-t pt-4">
            <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
            <FaXTwitter className="cursor-pointer hover:text-yellow-400" />
            <FaWhatsapp className="cursor-pointer hover:text-yellow-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
            <FaYoutube className="cursor-pointer hover:text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
