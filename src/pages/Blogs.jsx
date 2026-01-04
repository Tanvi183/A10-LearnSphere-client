import { Link } from "react-router";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaFlag,
  FaBook,
} from "react-icons/fa";
import useTitle from "../hooks/useTitle";

const blogs = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: "How Online Learning Is Transforming Modern Education",
  category: "Education",
  author: "Admin",
  date: "July 2024",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
}));

const Blogs = () => {
  useTitle("Blogs");

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
          <h1 className="text-4xl font-bold  mb-2">Latest News & Articles</h1>
          <nav className=" text-sm">
            <ol className="flex items-center space-x-2">
              <li>Home</li>
              <li className="">›</li>
              <li className="text-indigo-600 font-medium">Blogs</li>
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
      <section className="py-20 bg-base-100 text-base-content transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                         transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category */}
                  <span
                    className="inline-block text-[12px] font-semibold text-[#5751e1]
                                 bg-indigo-50 px-4 py-1 rounded-full w-fit mb-3"
                  >
                    {blog.category}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-[18px] font-semibold leading-[26px] text-gray-900
                               hover:text-[#5751e1] transition line-clamp-2 mb-4"
                  >
                    <Link to="#">{blog.title}</Link>
                  </h3>

                  {/* Meta */}
                  <p className="text-[14px] text-gray-500 mb-6">
                    {blog.date} • {blog.author}
                  </p>

                  {/* Button */}
                  <div className="mt-auto">
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center text-[14px] font-semibold
                               text-gray-900 bg-yellow-400 px-6 py-2 rounded-full
                               hover:bg-yellow-500 transition"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center">
            <div className="flex items-center gap-3">
              <button
                className="w-11 h-11 rounded-full border border-gray-300
                               flex items-center justify-center hover:bg-indigo-50 transition"
              >
                <FaArrowLeft />
              </button>

              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`w-11 h-11 rounded-full text-[15px] font-semibold transition
                  ${
                    page === 1
                      ? "bg-[#5751e1] text-white"
                      : "border border-gray-300 hover:bg-indigo-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                className="w-11 h-11 rounded-full border border-gray-300
                               flex items-center justify-center hover:bg-indigo-50 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
