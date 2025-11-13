import React from "react";
import { FaStar } from "react-icons/fa";

function CourseCard({ course }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      {/* Course Image Section */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Course Content Section */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {course.category}
          </span>

          <span className="flex items-center gap-1 text-yellow-500 font-semibold text-sm">
            <FaStar className="text-yellow-400" />
            {course.rating} Reviews
          </span>
        </div>

        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 mb-4">By {course.instructor}</p>

        <div className="flex items-center justify-between">
          <button className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition">
            Enroll Now
          </button>
          <p className="text-lg font-bold text-indigo-600">${course.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
