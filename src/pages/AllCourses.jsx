import React, { useEffect, useState } from "react";
import { FaBook, FaFlag, FaStar, FaSearch } from "react-icons/fa";
import CourseCard from "../components/Courses/CourseCard";
import useTitle from "../hooks/useTitle";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Shared/Loading";
import useAuth from "../hooks/useAuth";

const AllCourses = () => {
  useTitle("Courses");

  const axiosInstance = useAxios();
  const { loading, setLoading } = useAuth();

  // State
  const [category, setCategory] = useState([]);
  const [courses, setCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch Categories
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/category")
      .then((res) => {
        setCategory(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosInstance, setLoading]);

  // Fetch Courses with Pagination, Search & Sort
  useEffect(() => {
    setLoading(true);

    axiosInstance
      .get("/courses-paginated", {
        params: {
          page: currentPage,
          limit: 9,
          sort: sortOrder,
          search: searchTerm,
          category: activeCategory || "",
        },
      })
      .then((res) => {
        setCourses(res.data.courses);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [
    axiosInstance,
    currentPage,
    sortOrder,
    searchTerm,
    activeCategory,
    setLoading,
  ]);

  if (loading) return <Loading />;

  return (
    <div className="mb-20">
      {/* Hero Section */}
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
          <h1 className="text-4xl font-bold mb-2">All Courses</h1>
          <nav className="text-sm">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li>Home</li>
              <li>›</li>
              <li className="text-indigo-600 font-medium">Courses</li>
            </ol>
          </nav>
        </div>

        {/* Decorative Icons */}
        <div className="absolute top-10 right-20 opacity-50 text-purple-300">
          <FaStar />
        </div>
        <div className="absolute top-32 right-10 opacity-50 text-purple-300 rotate-6">
          <FaFlag />
        </div>
        <div className="absolute bottom-10 right-40 opacity-50 text-purple-300">
          <FaBook />
        </div>
      </section>

      {/* Main Content */}
      <div className="py-10 px-6 lg:px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Sidebar Categories */}
          <aside className="hidden lg:block w-60 bg-white border border-gray-200 rounded-xl p-6 h-fit shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
            {category.length > 0 ? (
              <ul className="space-y-2 text-gray-700">
                <li
                  className={`px-3 py-2 rounded-lg cursor-pointer ${
                    activeCategory === null
                      ? "bg-purple-50 text-purple-700 font-semibold"
                      : "hover:bg-purple-50"
                  }`}
                  onClick={() => setActiveCategory(null)}
                >
                  All
                </li>
                {category.map((cat) => (
                  <li
                    key={cat._id}
                    className={`px-3 py-2 rounded-lg cursor-pointer ${
                      activeCategory === cat.name
                        ? "bg-purple-50 text-purple-700 font-semibold"
                        : "hover:bg-purple-50"
                    }`}
                    onClick={() => setActiveCategory(cat.name)}
                  >
                    {cat.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">Loading categories...</p>
            )}
          </aside>

          {/* Main Courses Grid */}
          <main className="flex-1">
            {/* Search & Sort */}
            <div className="flex flex-col md:flex-row items-left justify-between mb-6 gap-4">
              <h2 className="text-lg font-semibold mb-4">
                Showing {courses.length} Results
              </h2>
              <div className="flex gap-5">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1); // Reset to first page on search
                    }}
                    className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className=" px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>
              </div>
            </div>

            {courses.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course._id} course={course} />
                ))}
              </div>
            ) : (
              <p className="font-bold text-center">No courses found.</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === idx + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
