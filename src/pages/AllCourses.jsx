import React from "react";
import { FaBook, FaFlag, FaStar } from "react-icons/fa";
import SidebarFilters from "../components/Courses/SidebarFilters";
import CourseCard from "../components/Courses/CourseCard";
import Pagination from "../components/Courses/Pagination";

const courses = [
  {
    image: "https://i.ibb.co.com/TqHN9JPx/demo-app-1.webp", // or your imported image path
    category: "Business",
    rating: "4.8",
    title: "Financial Analyst Training & Investing Course",
    instructor: "Robert Fox",
    price: 12.0,
  },
  {
    image: "https://i.ibb.co.com/HDxxz26J/demo-app-2.webp",
    title: "The Complete Graphic Design for Beginners",
    instructor: "Jenny Wilson",
    price: 19,
    category: "Design",
    rating: 4.5,
  },
  // ...more
];

const AllCourses = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-[#f9f9ff] to-[#f5f3ff] py-20">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Courses</h1>
          <nav className="text-gray-600 text-sm">
            <ol className="flex items-center space-x-2">
              <li>Home</li>
              <li className="text-gray-400">›</li>
              <li className="text-indigo-600 font-medium">Courses</li>
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

      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <SidebarFilters />

          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Showing 250 Total Results
              </h2>
              <select className="border border-gray-300 rounded-md text-sm px-3 py-2">
                <option>Most Popular</option>
                <option>Highest Rated</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((c, i) => (
                <CourseCard key={i} course={c} />
              ))}
            </div>

            {/* <Pagination /> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
