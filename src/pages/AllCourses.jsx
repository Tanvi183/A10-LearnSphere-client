import React, { useEffect, useState } from "react";
import { FaBook, FaFlag, FaStar } from "react-icons/fa";
import CourseCard from "../components/Courses/CourseCard";
import useTitle from "../hooks/useTitle";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Shared/Loading";
import useAuth from "../hooks/useAuth";

const AllCourses = () => {
  useTitle("Courses");

  const axiosInstance = useAxios();
  const [category, setCategory] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [courses, setCourses] = useState(allCourses); // filtered courses
  const [activeCategory, setActiveCategory] = useState(null);

  const { loading, setLoading } = useAuth();

  // Load Categories
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

  // All Courses
  useEffect(() => {
    setLoading(true);

    axiosInstance
      .get("/courses")
      .then((res) => {
        setAllCourses(res.data);
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosInstance, setLoading]);

  // Filter courses when category changes
  useEffect(() => {
    if (activeCategory) {
      const filtered = allCourses.filter(
        (course) =>
          course.category?.toLowerCase().trim() ===
          activeCategory?.toLowerCase().trim()
      );
      setCourses(filtered);
    } else {
      setCourses(allCourses);
    }
  }, [activeCategory, allCourses]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
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
          <h1 className="text-4xl font-bold  mb-2">All Courses</h1>
          <nav className=" text-sm">
            <ol className="flex items-center space-x-2">
              <li>Home</li>
              <li className="">›</li>
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

      <div className="min-h-screen py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-64 bg-white border border-gray-200 rounded-xl p-6 h-fit shadow-sm">
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

          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold ">
                Showing {courses.length} Total Results
              </h2>
            </div>

            {courses.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course._id} course={course} />
                ))}
              </div>
            ) : (
              <p className="font-bold text-center">
                No courses found for this category.
              </p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
