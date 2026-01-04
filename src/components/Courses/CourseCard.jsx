import React from "react";
import { Link } from "react-router";
import { FaTrash, FaEdit, FaDollarSign } from "react-icons/fa";

function CourseCard({
  course,
  // handleDelete, handleEdit
}) {
  const { _id, courseId, title, category, instructor_name, price, image } =
    course;

  // const location = useLocation();
  // const isDashboard = location.pathname.includes("/dashboard");

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col group">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover transform transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 flex flex-col flex-grow">
        {/* Category */}
        <span className="text-xs font-medium text-[#5751e1] bg-indigo-50 px-3 py-1 rounded-full w-fit">
          {category}
        </span>

        {/* Title */}
        <Link
          to={`/coursesDetails/${courseId || _id}`}
          className="font-semibold text-base text-gray-900 leading-snug line-clamp-2"
        >
          {title}
        </Link>

        {/* Instructor */}
        <div className="flex items-center gap-2">
          <img
            src={course?.instructor_photo}
            alt=""
            className="w-7 h-7 rounded-full object-cover"
          />
          <p className="text-sm text-gray-600 truncate">{instructor_name}</p>
        </div>

        {/* Price + Button */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="text-sm font-semibold text-[#5751e1]">${price}</p>

          <Link
            to={`/coursesDetails/${courseId || _id}`}
            className="bg-yellow-400 text-gray-900 font-semibold px-4 py-1.5 
                   rounded-full hover:bg-yellow-500 transition cursor-pointer text-sm"
          >
            View Details
          </Link>
        </div>

        {/* Dashboard Actions */}
        {/* {isDashboard && (
          <div className="flex gap-2 pt-2 border-t">
            <button
              onClick={() => handleEdit(course)}
              className="flex-1 py-1.5 rounded-md border border-blue-500 text-blue-500
                     hover:bg-blue-500 hover:text-white transition text-xs flex items-center justify-center gap-1"
            >
              <FaEdit /> Edit
            </button>

            <button
              onClick={() => handleDelete(course._id)}
              className="flex-1 py-1.5 rounded-md border border-red-500 text-red-500
                     hover:bg-red-500 hover:text-white transition text-xs flex items-center justify-center gap-1"
            >
              <FaTrash /> Delete
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default CourseCard;
