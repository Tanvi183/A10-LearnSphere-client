import React, { useState } from "react";
import { Link } from "react-router";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaStar,
  FaFlag,
  FaBook,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill out all fields!");
      return;
    }

    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <section className="relative bg-base py-20">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 top-0 opacity-40 text-purple-200"
            width="400"
            height="400"
            fill="none"
            viewBox="0 0 400 400"
          >
            <path
              d="M0 100 Q200 200 400 50"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <h1 className="text-4xl font-bold  mb-2">Contact With Us</h1>
          <nav className=" text-sm">
            <ol className="flex items-center space-x-2">
              <li>Home</li>
              <li className="">›</li>
              <li className="text-indigo-600 font-medium">Contact</li>
            </ol>
          </nav>
        </div>

        <div className="absolute top-10 right-20 opacity-50 text-purple-300">
          <FaStar></FaStar>
        </div>
        <div className="absolute top-32 right-10 opacity-50 text-purple-300 rotate-6">
          <FaFlag></FaFlag>
        </div>
        <div className="absolute bottom-10 right-40 opacity-50 text-purple-300">
          <FaBook></FaBook>
        </div>
      </section>

      <section className="bg-base-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-4 grid md:grid-cols-3 gap-12 pb-20">
          <div className="flex flex-col gap-6 md:col-span-1">
            <div className="bg-white text-gray-900 p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
              <div className="text-indigo-600 text-3xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p className="text-gray-600">
                  Mirsharai, Chittagong, Bangladesh
                </p>
              </div>
            </div>

            <div className="bg-white text-gray-900 p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
              <div className="text-indigo-600 text-3xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                +880 1837 889646
              </div>
            </div>

            <div className="bg-white text-gray-900 p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
              <div className="text-indigo-600 text-3xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                mneshat7@gmail.com
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-900 dark:border-gray-600 dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-900 dark:border-gray-600 dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-900 dark:border-gray-600 dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message*"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 text-gray-900 dark:border-gray-600 dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-4 mb-20">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.4121646673466!2d91.95625007523469!3d22.517421885208853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdbe104aa173d%3A0x90f20aeb80e6b6a1!2sMirsharai%2C%20Chittagong%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1698518000000!5m2!1sen!2sbd"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0 shadow-md"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
