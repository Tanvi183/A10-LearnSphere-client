import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bannerPerson from "../../assets/banner_img.png";
import { IoIosClose } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-base-100 text-base-content transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-4 py-10 flex flex-col lg:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left z-10"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Learning is What You
            <br />
            Make it Yours <br /> at{" "}
            <span className="text-primary">LearnSphere</span>
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Start Free Trial →
            </motion.button>

            {/* Play Button */}
            <div
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-md group-hover:scale-110 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8 5.5 11.598V4.402L10.804 8z" />
                </svg>
              </div>
              <span className="font-medium text-base-content group-hover:text-primary transition">
                Watch Our Class Demo
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-1/2">
          {/* Floating Person */}
          <motion.img
            src={bannerPerson}
            alt="Student"
            className="relative w-[320px] sm:w-[400px] lg:w-[480px] z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Card */}
          <motion.div
            className="absolute top-15 left-10 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
              <IoIosPeople className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">
                Total Students
              </p>
              <p className="font-semibold text-gray-800">15K</p>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-base-100 rounded-xl shadow-lg overflow-hidden w-[90%] sm:w-[600px] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2ASGA9lBJTY?si=MiovhRyOFdyzXz3h"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 cursor-pointer"
              >
                <IoIosClose />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
