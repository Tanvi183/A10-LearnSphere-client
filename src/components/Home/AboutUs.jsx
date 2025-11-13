import React from "react";
import { FaArrowRight } from "react-icons/fa";
import aboutImg from "../../assets/about_img.png";
import aboutShape from "../../assets/about_shape.svg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-16 bg-base-100 text-base-content transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Image */}
        <div className="relative flex justify-center md:w-1/2 mb-10 md:mb-0">
          {/* Floating Card */}
          <div className="relative">
            <motion.div
              className="absolute -top-5 md:top-0 right-12 md:right-50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={aboutShape} alt="" />
            </motion.div>
            <div className="absolute inset-0 bg-yellow-100 rounded-full scale-130 -z-10" />
            <img
              src={aboutImg}
              alt="Students studying"
              className="rounded-xl w-80 md:w-120 lg:w-150"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 md:pl-10 text-center md:text-left">
          <button className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Get More About Us
          </button>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
            Thousand Of Top
            <span className="bg-yellow-300 px-2 py-1 rounded-md">Courses</span>
            Now In One Place
          </h2>

          <p className="mb-6">
            Groove’s intuitive shared inbox makes it easy for team members to
            organize, prioritize, and collaborate. In this episode of the
            Smashing Pod we’re talking about Web Platform Baseline.
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "The Most World Class Instructors",
              "Access Your Class anywhere",
              "Flexible Course Plan",
            ].map((text, i) => (
              <li key={i} className="flex items-center space-x-2">
                <span className="w-6 h-6 flex items-center justify-center bg-yellow-400 rounded-full text-white font-bold">
                  <FaArrowRight size={10} />
                </span>
                <span className="font-semibold">{text}</span>
              </li>
            ))}
          </ul>

          <button className="btn-primary">
            <span>Start Free Trial</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
