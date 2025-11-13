import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const instructors = [
  {
    name: "Mark Jukarberg",
    role: "UX Design Lead",
    image: "https://i.ibb.co.com/9k5nNFwj/staff-7.jpg", // replace with your image path
  },
  {
    name: "Olivia Mia",
    role: "Web Design",
    image: "https://i.ibb.co.com/KzFP6qj9/staff-5.jpg",
  },
  {
    name: "William Hope",
    role: "Digital Marketing",
    image: "https://i.ibb.co.com/fzSFmCBx/person-1.jpg",
  },
  {
    name: "Sophia Ava",
    role: "Web Development",
    image: "https://i.ibb.co.com/PsFD0PxP/staff-3.jpg",
  },
];

const TopInstructors = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-4 flex flex-col lg:flex-row lg:items-start gap-10">
        <div className="w-full lg:w-5/12 text-center lg:text-left">
          <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full">
            Skilled Introduce
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Our Top Class & Expert Instructors In One Place
          </h2>
          <p className="mt-4">
            When an unknown printer took a galley of type and scrambled it to
            make a specimen book. It has survived not only five centuries.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="btn-primary">See All Instructors →</button>
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {instructors.map((inst, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-xl shadow-sm hover:shadow-lg p-6 transition"
              >
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {inst.name}
                  </h3>
                  <p className="text-indigo-600 font-medium">{inst.role}</p>
                  <div className="flex justify-center sm:justify-start items-center gap-1 mt-2 text-yellow-400">
                    <FaStar />
                    <span className="text-sm text-gray-700">(4.8 Ratings)</span>
                  </div>
                  <div className="flex justify-center sm:justify-start gap-3 mt-3 text-gray-500 text-lg">
                    <FaFacebookF className="hover:text-indigo-600 cursor-pointer" />
                    <FaXTwitter className="hover:text-indigo-600 cursor-pointer" />
                    <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
