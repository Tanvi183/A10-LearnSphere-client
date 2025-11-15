import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import { FaTrash, FaEdit } from "react-icons/fa";

function CourseCard({ course, handleDelete, handleEdit }) {
  const { _id, courseId, title, category, instructor_name, price, image } =
    course;

  const location = useLocation();
  const isDashboard = location.pathname.includes("/dashboard");

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full">
      {/* Course Image Section */}
      <div className="relative h-55">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Course Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full truncate max-w-[100px]">
              {category}
            </span>
          </div>

          <Link
            to={`/coursesDetails/${courseId || _id}`}
            className="font-bold text-gray-900 text-lg leading-snug mb-2 line-clamp-2 min-h-[3rem]"
          >
            {title}
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={course?.instructor_photo}
              alt=""
            />
            <p className="text-sm text-gray-600 truncate max-w-[150px]">
              By {instructor_name}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-auto">
          <Link
            to={`/coursesDetails/${courseId || _id}`}
            className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition cursor-pointer"
          >
            View Details
          </Link>
          <p className="text-lg font-bold text-indigo-600">${price}</p>
        </div>

        {/* Edit + Delete Buttons */}
        {isDashboard && (
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => handleEdit(course)}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text-sm"
            >
              <FaEdit /> Edit
            </button>

            <button
              onClick={() => handleDelete(course._id)}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition text-sm"
            >
              <FaTrash /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
